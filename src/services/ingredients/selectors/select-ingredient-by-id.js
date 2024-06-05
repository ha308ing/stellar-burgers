import { createSelector } from "@reduxjs/toolkit";
import { selectIngredients } from "./index";

export const selectIngredientById = createSelector(
  [selectIngredients, (_, ingredientId) => ingredientId],
  (ingredients, ingredientId) => {
    const ingredientsFiltered = ingredients.filter(
      (ingredient) => ingredient._id === ingredientId,
    );
    return ingredientsFiltered.length > 0 ? ingredientsFiltered[0] : null;
  },
);
