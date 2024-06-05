import { createSelector } from "@reduxjs/toolkit";
import { selectBurger } from "./index";

export const selectBurgerKeyValue = createSelector([selectBurger], (burger) => {
  const { bun, inner } = burger;
  const burgerKeyValue = {};
  if (bun) burgerKeyValue[bun._id] = bun;

  for (let ingredient of inner) {
    burgerKeyValue[ingredient._id] = ingredient;
  }

  return burgerKeyValue;
});
