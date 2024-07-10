import { STATUSES } from "../../../utils";
import { IFormState } from "../types";
import {
  AnyAsyncThunk,
  RejectedActionFromAsyncThunk,
} from "@reduxjs/toolkit/dist/matchers";

export const setMessageRejected = <
  T extends IFormState,
  K extends AnyAsyncThunk,
>(
  state: T,
  action: RejectedActionFromAsyncThunk<K>,
) => {
  state.status = STATUSES.REJECTED;
  state.message = action.error.message;
};
