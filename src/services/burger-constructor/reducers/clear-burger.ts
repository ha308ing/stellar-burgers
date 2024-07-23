import type { CaseReducer } from "@reduxjs/toolkit";
import type { IBurgerConstructorState } from "../initial-state";
import { initialState } from "../initial-state";

export const clearBurger: CaseReducer<IBurgerConstructorState> = () =>
  initialState;
