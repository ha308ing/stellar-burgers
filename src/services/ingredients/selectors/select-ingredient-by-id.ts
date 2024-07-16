import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { selectIngredients } from "services/ingredients/selectors/select-ingredients";
import type { IIngredient } from "types";

export const selectIngredientById = createDraftSafeSelector(
  [selectIngredients, (_, ingredientId: IIngredient["_id"]) => ingredientId],
  (ingredients, ingredientId) => ingredients[ingredientId] ?? null,
);
