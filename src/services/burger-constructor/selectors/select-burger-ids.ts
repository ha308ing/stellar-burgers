import { createSelector } from "@reduxjs/toolkit";
import { selectBurger } from "./index";

export const selectBurgerIds = createSelector(
  [selectBurger],
  ({ bun, inner }) => {
    const bunId = bun?._id ? bun._id : null;
    const innerIds = inner.map((ingredient) => ingredient._id);
    if (!bunId) return [...innerIds];
    return [bunId, ...innerIds, bunId];
  },
);
