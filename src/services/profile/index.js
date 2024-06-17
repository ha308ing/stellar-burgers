import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { get } from "./thunks/get";
import { STATUSES } from "../../utils";
import { logout } from "./thunks/logout";

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetLogoutMessage: (state) => {
      state.logoutStatus = initialState.logoutStatus;
      state.message = initialState.message;
    },
    set: (state, action) => {
      state.isAuthChecked = true;
      state.user = { ...state.user, ...action.payload };
    },
  },
  selectors: {
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
          : action.payload;
        state.message = initialState.message;
        state.isAuthChecked = true;
      })
      .addCase(get.rejected, (state, action) => {
        state.status = STATUSES.REJECTED;
        state.message = action.error.message;
        state.user = initialState.user;
        state.isAuthChecked = true;
      })
      .addCase(logout.pending, (state, action) => {
        state.logoutStatus = STATUSES.PENDING;
        state.isAuthChecked = true;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutStatus = STATUSES.REJECTED;
        state.message = action.error.message;
        state.isAuthChecked = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.logoutStatus = STATUSES.FULFILLED;
        state.isAuthChecked = true;
      });
  },
});

export const { selectSlice: selectProfile } = profileSlice;
export const profileActions = { ...profileSlice.actions, get, logout };
export const { selectName } = profileSlice.selectors;
