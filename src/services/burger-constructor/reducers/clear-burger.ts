import { CaseReducer } from "@reduxjs/toolkit";
import { IBurgerConstructorState, initialState } from "../initial-state";

export const clearBurger: CaseReducer<IBurgerConstructorState> = () =>
  initialState;
