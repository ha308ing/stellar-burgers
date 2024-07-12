import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { INGREDIENT_TYPES } from "utils";
import type { IBurgerConstructorState } from "../initial-state";
import type { IIngredient } from "types";

export const addIngredient: CaseReducer<
  IBurgerConstructorState,
  PayloadAction<IIngredient>
> = (state, action) => {
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
