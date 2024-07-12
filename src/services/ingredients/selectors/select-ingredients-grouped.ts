import { createSelector } from "@reduxjs/toolkit";
import { formatIngredients } from "utils/format-ingredients";
import { selectIngredients, selectStatus } from "./index";

export const selectIgredientsGrouped = createSelector(
  [selectIngredients, selectStatus],
  (ingredients, status) => {
    const { ingredientsGrouped, groups } = formatIngredients(ingredients);
    const ingredientsQty = ingredients.length;
    return {
      ingredientsGrouped,
      groups,
      ingredientsQty,
      status,
    };
  },
);
