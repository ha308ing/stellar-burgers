import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import * as selectors from "./selectors";
import { getIngredientsThunk } from "./thunks";
import { STATUSES } from "../../utils";

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

export const {
  selectIgredientsGrouped,
  selectGroups,
  selectActiveIngredient,
  selectStatus,
} = ingredientsSlice.selectors;

export const selectIngredient = (ingredientId) => (state) =>
  ingredientsSlice.selectors.selectIngredientById(state, ingredientId);

export const selectGroup = (groupIndex) => (state) =>
  ingredientsSlice.selectors.selectGroupById(state, groupIndex);
