import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  IBurgerConstructorState,
  IConstructorIngredient,
} from "../initial-state";

export const removeIngredient: CaseReducer<
  IBurgerConstructorState,
  PayloadAction<IConstructorIngredient["internalId"]>
> = (state, action) => {
  const internalId = action.payload;
  const isBun = state.burger?.bun?.internalId === internalId;
  if (isBun) {
    state.burger.bun = null;
  } else {
    state.burger.inner = [
      ...state.burger.inner.filter(
        (ingredient) => ingredient.internalId !== internalId,
      ),
    ];
  }
};
