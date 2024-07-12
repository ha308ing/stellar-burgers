import { createSlice } from "@reduxjs/toolkit";
import type {
  IBurgerConstructorState,
  IConstructorIngredient,
} from "./initial-state";
import { initialState } from "./initial-state";
import * as reducers from "./reducers";
import * as selectors from "./selectors";
export type {
  IBurgerConstructorState,
  IConstructorIngredient,
} from "./initial-state";

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

type TSliceSelectorState = {
  [burgerConstructorSlice.reducerPath]: IBurgerConstructorState;
};

export const selectIngredientQty =
  (ingredientId: IConstructorIngredient["internalId"]) =>
  (state: TSliceSelectorState) =>
    burgerConstructorSlice.selectors.selectIngredientQty(state, ingredientId);
