import { CaseReducer } from "@reduxjs/toolkit";
import { initialState, IOrderState } from "../initial-state";

export const clearOrder: CaseReducer<IOrderState> = () => initialState;
