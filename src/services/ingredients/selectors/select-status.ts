import type { IIngredientsState } from "../initial-state";

export const selectStatus = (state: IIngredientsState) => state.status;
