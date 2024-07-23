import { createSelector } from "@reduxjs/toolkit";
import { selectIgredientsGrouped } from "./index";

export const selectGroupById = createSelector(
  [selectIgredientsGrouped, (_, groupIndex: number) => groupIndex],
  ({ ingredientsGrouped, groups }, groupIndex) => ({
    ingredients: ingredientsGrouped[groupIndex],
    groupName: groups[groupIndex],
  }),
);
