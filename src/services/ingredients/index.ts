import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IIngredientsState } from "./initial-state";
import { initialState } from "./initial-state";
import * as selectors from "./selectors";
import { getIngredientsThunk } from "./thunks";
import type { TConnectionStatus } from "utils";
import { STATUSES } from "utils";
import type { IIngredient } from "types";
import { prepareIngredients } from "./utils/prepare-ingredients";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  selectors,
  reducers: {
    set: {
      reducer(
        state,
        action: PayloadAction<{
          status: TConnectionStatus;
          ingredients: Record<IIngredient["_id"], IIngredient>;
          ingredientsIds: IIngredient["_id"][];
        }>,
      ) {
        const { status, ingredients, ingredientsIds } = action.payload;
        state.status = status ?? initialState.status;
        state.ingredients = ingredients ?? initialState.ingredients;
        state.ingredientIds = ingredientsIds;
      },
      prepare(payload: {
        status: TConnectionStatus;
        ingredients: IIngredient[];
      }) {
        const { status, ingredients: ingredientsData } = payload;
        const { ingredients, ingredientsIds } =
          prepareIngredients(ingredientsData);

        return {
          payload: {
            status,
            ingredients,
            ingredientsIds,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsThunk.pending, (state) => {
        state.status = STATUSES.PENDING;
      })
      .addCase(getIngredientsThunk.rejected, (state) => {
        state.status = STATUSES.REJECTED;
        state.ingredients = initialState.ingredients;
        state.ingredientIds = initialState.ingredientIds;
      })
      .addCase(getIngredientsThunk.fulfilled, (state, action) => {
        state.status = STATUSES.FULFILLED;
        const { ingredients, ingredientsIds } = action.payload;
        state.ingredients = ingredients;
        state.ingredientIds = ingredientsIds;
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
  selectIngredientsStatus,
} = ingredientsSlice.selectors;

type TSelectorState = { [ingredientsSlice.reducerPath]: IIngredientsState };

export const selectIngredient =
  (ingredientId: IIngredient["_id"] | undefined) => (state: TSelectorState) =>
    ingredientId == null
      ? null
      : ingredientsSlice.selectors.selectIngredientById(state, ingredientId);

export const selectGroup = (groupIndex: number) => (state: TSelectorState) =>
  ingredientsSlice.selectors.selectGroupById(state, groupIndex);
