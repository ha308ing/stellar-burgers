import { IIngredientsState } from "../initial-state";

export const selectIngredients = (state: IIngredientsState) =>
  state.ingredients;