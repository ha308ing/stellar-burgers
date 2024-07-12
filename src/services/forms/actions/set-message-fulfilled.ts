import type { PayloadAction } from "@reduxjs/toolkit";
import { STATUSES } from "utils";
import type { IFormState } from "../types";

export const setMessageFulfilled = <T extends IFormState>(
  state: T,
  action: PayloadAction<string>,
) => {
  state.status = STATUSES.FULFILLED;
  state.message = action.payload;
};
