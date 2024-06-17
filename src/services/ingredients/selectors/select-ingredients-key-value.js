import { createSelector } from "@reduxjs/toolkit";
import { selectIngredients } from "./index";

export const selectIngredientsKeyValue = createSelector(
  [selectIngredients],
  (ingredients) => {
    const ingredientsKeyValue = {};

    for (const ingredient of Object.values(ingredients)) {
      const { _id } = ingredient;
      ingredientsKeyValue[_id] = ingredient;
    }

    return ingredientsKeyValue;
  },
);
