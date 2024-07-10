import { createSlice } from "@reduxjs/toolkit";
import { IIngredientsState, initialState } from "./initial-state";
import * as selectors from "./selectors";
import { getIngredientsThunk } from "./thunks";
import { STATUSES } from "../../utils";
import { IIngredient } from "../../types";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  selectors,
  reducers: {
    set: (state, action) => {
      const { status, ingredients } = action.payload;
      state.status = status ?? initialState.status;
      state.ingredients = ingredients ?? initialState.ingredients;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsThunk.pending, (state) => {
        state.status = STATUSES.PENDING;
      })
      .addCase(getIngredientsThunk.rejected, (state) => {
        state.status = STATUSES.REJECTED;
      })
      .addCase(getIngredientsThunk.fulfilled, (state, action) => {
        state.status = STATUSES.FULFILLED;
        state.ingredients = action.payload;
      });
  },
});

export const ingredientsActions = {
  ...ingredientsSlice.actions,
  getIngredients: getIngredientsThunk,
};

export const { selectIgredientsGrouped, selectGroups, selectStatus } =
  ingredientsSlice.selectors;

type TSelectorState = { [ingredientsSlice.reducerPath]: IIngredientsState };

export const selectIngredient =
  (ingredientId: IIngredient["_id"] | undefined) => (state: TSelectorState) =>
    ingredientId == null
      ? null
      : ingredientsSlice.selectors.selectIngredientById(state, ingredientId);

export const selectGroup = (groupIndex: number) => (state: TSelectorState) =>
  ingredientsSlice.selectors.selectGroupById(state, groupIndex);
