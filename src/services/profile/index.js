import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { get, logout } from "./thunks";
import { STATUSES } from "../../utils";

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetLogoutMessage: (state) => {
      state.logoutStatus = initialState.logoutStatus;
      state.message = initialState.message;
    },
    set: (state, action) => {
      state.status = STATUSES.FULFILLED;
      state.user = { ...state.user, ...action.payload };
    },
    setMessage: (state, action) => {
      state.status = STATUSES.REJECTED;
      state.message = action.payload;
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
      })
      .addCase(get.rejected, (state, action) => {
        state.status = STATUSES.REJECTED;
        state.message = action.error.message;
        state.user = initialState.user;
      })
      .addCase(logout.pending, (state) => {
        state.logoutStatus = STATUSES.PENDING;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutStatus = STATUSES.REJECTED;
        state.message = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.logoutStatus = STATUSES.FULFILLED;
      });
  },
});

export const { selectSlice: selectProfile } = profileSlice;
export const profileActions = { ...profileSlice.actions, get, logout };
export const { selectName } = profileSlice.selectors;
