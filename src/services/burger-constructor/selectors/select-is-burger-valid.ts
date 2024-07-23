import { createSelector } from "@reduxjs/toolkit";
import { selectBurger } from "./index";

export const selectIsBurgerValid = createSelector([selectBurger], (burger) => {
  const { bun, inner } = burger;
  return !(bun === null || inner.length < 1);
});
