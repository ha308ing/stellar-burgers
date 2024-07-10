import { createSelector } from "@reduxjs/toolkit";
import { selectIngredients } from "./index";
import { IIngredient } from "../../../types";

export const selectIngredientsKeyValue = createSelector(
  [selectIngredients],
  (ingredients) => {
    const ingredientsKeyValue: Record<IIngredient["_id"], IIngredient> = {};

    for (const ingredient of Object.values(ingredients)) {
      const { _id } = ingredient;
      ingredientsKeyValue[_id] = ingredient;
    }

    return ingredientsKeyValue;
  },
);
