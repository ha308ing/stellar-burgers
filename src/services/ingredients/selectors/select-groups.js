import { createSelector } from "@reduxjs/toolkit";
import { selectIgredientsGrouped } from "./index";

export const selectGroups = createSelector(
  [selectIgredientsGrouped],
  (ingredientsGrouped) => ingredientsGrouped.groups,
);
