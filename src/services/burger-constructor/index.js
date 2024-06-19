import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import * as reducers from "./reducers";
import * as selectors from "./selectors";

export const burgerConstructorSlice = createSlice({
  name: "burgerConstructor",
  initialState,
  reducers,
  selectors,
});

export const burgerConstructorActions = { ...burgerConstructorSlice.actions };

export const {
  selectBurger,
  selectBurgerIds,
  selectBurgerTotal,
  selectIsBurgerValid,
} = burgerConstructorSlice.selectors;

export const selectIngredientQty = (ingredientId) => (state) =>
  burgerConstructorSlice.selectors.selectIngredientQty(state, ingredientId);
