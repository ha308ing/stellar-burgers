import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { groupIngredients } from "services/ingredients/utils";
import { selectIngredientsArray } from "./select-ingredients";

export const selectIgredientsGrouped = createDraftSafeSelector(
  [selectIngredientsArray],
  (ingredients) => {
    const { ingredientsGrouped, groups } = groupIngredients(ingredients);
    return {
      ingredientsGrouped,
      groups,
    };
  },
);
