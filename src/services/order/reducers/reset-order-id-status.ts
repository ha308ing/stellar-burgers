import { CaseReducer } from "@reduxjs/toolkit";
import { initialState, IOrderState } from "../initial-state";

export const resetOrderIdStatus: CaseReducer<IOrderState> = (state) => {
  state.orderIdStatus = initialState.orderIdStatus;
};
