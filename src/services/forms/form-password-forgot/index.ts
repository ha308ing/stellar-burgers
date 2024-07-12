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
export type {
  IFormPasswordForgotInputs,
  IFormPasswordForgotState,
} from "./initial-state";

export const formPasswordForgotSlice = createSlice({
  name: "formPasswordForgot",
  initialState,
  reducers: {
    change,
    resetMessage,
    resetInputs: (state) => {
      state.inputs = initialState.inputs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submit.pending, setStatusPending)
      .addCase(submit.rejected, setMessageRejected)
      .addCase(submit.fulfilled, setMessageFulfilled);
  },
});

export const { selectSlice: selectFormPasswordForgot } =
  formPasswordForgotSlice;
export const formPasswordForgotActions = {
  ...formPasswordForgotSlice.actions,
  submit,
};
