import { createSlice } from "@reduxjs/toolkit";
import {
  change,
  resetMessage,
  setMessageFulfilled,
  setMessageRejected,
  setStatusPending,
} from "../actions";
import { submit } from "./thunks/submit";
import { initialState } from "./initial-state";

export const formPasswordResetSlice = createSlice({
  name: "formPasswordReset",
  initialState,
  reducers: {
    change,
    resetMessage,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submit.pending, setStatusPending)
      .addCase(submit.rejected, setMessageRejected)
      .addCase(submit.fulfilled, setMessageFulfilled);
  },
});

export const { selectSlice: selectFormPasswordReset } = formPasswordResetSlice;
export const formPasswordResetActions = {
  ...formPasswordResetSlice.actions,
  submit,
};
