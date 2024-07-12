import type { CaseReducer } from "@reduxjs/toolkit";
import type { IOrderState } from "../initial-state";
import { initialState } from "../initial-state";

export const clearOrder: CaseReducer<IOrderState> = () => initialState;
