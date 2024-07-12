import type { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import type { IFormState } from "../types";

export type TChangeCaseReducer<
  T extends IFormState,
  U = T["inputs"],
> = CaseReducer<T, PayloadAction<[keyof U, U[keyof U]]>>;

export const change = <T extends Record<string, string>>(
  state: IFormState<T>,
  action: PayloadAction<[keyof T, T[keyof T]]>,
) => {
  const [name, value] = action.payload;

  if (name in state.inputs) {
    state.inputs[name] = value;
  }
};
