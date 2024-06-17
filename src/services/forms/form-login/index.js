import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { submit } from "./thunks/submit";
import {
  change,
  resetMessage,
  setStatusPending,
  setMessageRejected,
  resetInputsFullfilled,
} from "../actions";

export const formLoginSlice = createSlice({
  name: "formLogin",
  initialState,
  reducers: {
    change,
    resetMessage,
  },
  extraReducers: (builder) => {
    builder.addCase(submit.pending, setStatusPending);
    builder.addCase(submit.rejected, setMessageRejected);
    builder.addCase(submit.fulfilled, resetInputsFullfilled(initialState));
  },
});

export const { selectSlice: selectFormLogin } = formLoginSlice;
export const loginActions = {
  ...formLoginSlice.actions,
  submit,
};
