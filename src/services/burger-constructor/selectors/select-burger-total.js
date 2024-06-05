import { createSelector } from "@reduxjs/toolkit";
import { selectBurgerIds, selectBurgerKeyValue } from "./index";

export const selectBurgerTotal = createSelector(
  [selectBurgerIds, selectBurgerKeyValue],
  (burgerIds, ingredients) =>
    burgerIds.reduce(
      (total, ingredientId) => (total += ingredients[ingredientId]?.price ?? 0),
      0,
    ),
);
