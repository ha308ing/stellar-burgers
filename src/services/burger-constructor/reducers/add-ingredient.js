import { nanoid } from "@reduxjs/toolkit";
import { INGREDIENT_TYPES } from "../../../utils";

export const addIngredient = (state, action) => {
  const internalId = nanoid();
  const ingredient = { ...action.payload, internalId };
  const type = ingredient.type;
  const isBun = type === INGREDIENT_TYPES.BUN;

  if (isBun) {
    state.burger.bun = { ...ingredient };
  } else {
    state.burger.inner = [...state.burger.inner, { ...ingredient }];
  }
};
