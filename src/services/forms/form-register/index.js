import { createSlice } from "@reduxjs/toolkit";
import {
  change,
  resetInputsFullfilled,
  resetMessage,
  setMessageRejected,
  setStatusPending,
} from "../actions";
import { submit } from "./thunks/submit";
import { initialState } from "./initial-state";

export const formRegisterSlice = createSlice({
  name: "formRegister",
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

export const { selectSlice: selectFormRegister } = formRegisterSlice;
export const registerActions = {
  ...formRegisterSlice.actions,
  submit,
};
