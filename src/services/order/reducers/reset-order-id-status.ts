import type { CaseReducer } from "@reduxjs/toolkit";
import type { IOrderState } from "../initial-state";
import { initialState } from "../initial-state";

export const resetOrderIdStatus: CaseReducer<IOrderState> = (state) => {
  state.orderIdStatus = initialState.orderIdStatus;
};
