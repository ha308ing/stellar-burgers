import { createSelector } from "@reduxjs/toolkit";
import { selectBurgerIds } from "./index";

export const selectIngredientQty = createSelector(
  [selectBurgerIds, (_, ingredientId) => ingredientId],
  (burgerIds, ingredientId) =>
    burgerIds.filter((id) => id === ingredientId).length,
);
