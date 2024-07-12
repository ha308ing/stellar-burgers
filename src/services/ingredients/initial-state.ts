import type { IIngredient } from "types";
import type { TConnectionStatus } from "utils";

export interface IIngredientsState {
  status: TConnectionStatus | null;
  ingredients: IIngredient[];
}

export const initialState: IIngredientsState = {
  status: null,
  ingredients: [],
};
