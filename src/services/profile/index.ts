import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { get, logout } from "./thunks";
import type { IUserDataPassword } from "utils";
import { STATUSES } from "utils";
import * as selectors from "./selectors";

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetLogoutMessage: (state) => {
      state.logoutStatus = initialState.logoutStatus;
      state.message = initialState.message;
    },
    set: (state, action: PayloadAction<Partial<IUserDataPassword>>) => {
      state.status = STATUSES.FULFILLED;
      const keys: Array<keyof IUserDataPassword> = [
        "email",
        "name",
        "password",
      ];
      for (let key of keys) {
        if (state.user == null)
          state.user = { email: "", name: "", password: "" };
        state.user[key] = getNewValue(state.user, action.payload, key);
      }
    },
    setMessage: (state, action) => {
      state.status = STATUSES.REJECTED;
      state.message = action.payload;
    },
  },
  selectors: {
    ...selectors,
    selectName: (state) => state.user?.name ?? null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(get.pending, (state) => {
        state.status = STATUSES.PENDING;
      })
      .addCase(get.fulfilled, (state, action) => {
        state.status = STATUSES.FULFILLED;
        state.user = state.user
          ? { ...state.user, ...action.payload }
          : { password: "***", ...action.payload };
        state.message = initialState.message;
      })
      .addCase(get.rejected, (state, action) => {
        state.status = STATUSES.REJECTED;
        state.message = action.error.message ?? "";
        state.user = initialState.user;
      })
      .addCase(logout.pending, (state) => {
        state.logoutStatus = STATUSES.PENDING;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutStatus = STATUSES.REJECTED;
        state.message = action.error.message ?? "";
      })
      .addCase(logout.fulfilled, (state) => {
        state.logoutStatus = STATUSES.FULFILLED;
      });
  },
});

export const { selectSlice: selectProfile } = profileSlice;
export const profileActions = { ...profileSlice.actions, get, logout };
export const { selectName, selectLogoutStatus } = profileSlice.selectors;

function getNewValue<
  S extends P | null,
  P extends { [key in keyof P]: P[key] },
  T extends keyof P,
>(dataState: S, dataPayload: P, prop: T) {
  if (dataState != null && dataPayload[prop] == null) {
    return dataState[prop];
  }

  return dataPayload[prop] ?? "";
}
