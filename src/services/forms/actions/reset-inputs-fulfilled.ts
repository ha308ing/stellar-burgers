import type { CaseReducer } from "@reduxjs/toolkit";
import { STATUSES } from "utils";
import type { IFormState } from "../types";

export const resetInputsFulfilled =
  <T extends IFormState>(initialState: T): CaseReducer<T> =>
  (state) => {
    state.status = STATUSES.FULFILLED;
    state.inputs = initialState.inputs;
  };
