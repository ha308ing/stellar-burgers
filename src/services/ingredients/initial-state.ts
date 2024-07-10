import { IIngredient } from "../../types";
import { TConnectionStatus } from "../../utils/connection-statuses";

export interface IIngredientsState {
  status: TConnectionStatus | null;
  ingredients: IIngredient[];
}

export const initialState: IIngredientsState = {
  status: null,
  ingredients: [],
};
