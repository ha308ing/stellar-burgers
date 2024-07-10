import { createSelector } from "@reduxjs/toolkit";
import { selectIngredients } from "./index";
import { IIngredient } from "../../../types";

export const selectIngredientById = createSelector(
  [selectIngredients, (_, ingredientId: IIngredient["_id"]) => ingredientId],
  (ingredients, ingredientId) => {
    const ingredientsFiltered = ingredients.filter(
      (ingredient) => ingredient._id === ingredientId,
    );
    return ingredientsFiltered.length > 0 ? ingredientsFiltered[0] : null;
  },
);
