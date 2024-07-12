import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormProfileInputs, initialState } from "./initial-state";
import {
  change,
  resetMessage,
  setMessageRejected,
  setStatusPending,
} from "../actions";
import { submit } from "./thunks/submit";
import { STATUSES } from "utils";
export type { IFormProfileInputs, IFormProfileState } from "./initial-state";

export const formProfileSlice = createSlice({
  name: "formProfile",
  initialState,
  reducers: {
    change,
    set: (state, action: PayloadAction<Partial<IFormProfileInputs>>) => {
      state.inputs = { ...state.inputs, ...action.payload };
    },
    resetMessage,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submit.pending, setStatusPending)
      .addCase(submit.rejected, setMessageRejected)
      .addCase(submit.fulfilled, (state) => {
        state.status = STATUSES.FULFILLED;
      });
  },
});

export const formProfileActions = { ...formProfileSlice.actions, submit };
export const { selectSlice: selectFormProfile } = formProfileSlice;
