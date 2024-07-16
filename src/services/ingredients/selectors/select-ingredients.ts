import { createDraftSafeSelector } from "@reduxjs/toolkit";
import type { IIngredientsState } from "services/ingredients/initial-state";

export const selectIngredientsIds = (state: IIngredientsState) =>
  state.ingredientIds;

export const selectIngredients = (state: IIngredientsState) =>
  state.ingredients;

export const selectIngredientsArray = createDraftSafeSelector(
  [selectIngredientsIds, selectIngredients],
  (ingredientsIds, ingredients) =>
    ingredientsIds.map((ingredientId) => ingredients[ingredientId]),
);
