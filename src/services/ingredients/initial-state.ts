import type { IIngredient } from "types";
import type { TConnectionStatus } from "utils";

export interface IIngredientsState {
  status: TConnectionStatus | null;
  ingredients: Record<IIngredient["_id"], IIngredient>;
  ingredientIds: IIngredient["_id"][];
}

export const initialState: IIngredientsState = {
  status: null,
  ingredients: {},
  ingredientIds: [],
};
