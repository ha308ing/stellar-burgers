import { IIngredient } from "../../types";

export interface IConstructorIngredient extends IIngredient {
  internalId: string;
}

export interface IBurgerConstructorState {
  burger: {
    bun: IConstructorIngredient | null;
    inner: IConstructorIngredient[];
  };
}

export const initialState: IBurgerConstructorState = {
  burger: {
    bun: null,
    inner: [],
  },
};
