import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { loadApp } from "./thunks/load-app";
import { STATUSES } from "utils";
import * as selectors from "./selectors";
export type { ILoadAppState } from "./initial-state";

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsMobile: (state) => {
      state.isMobile = true;
    },
    setIsDesktop: (state) => {
      state.isMobile = false;
    },
  },
  selectors,
  extraReducers: (builder) => {
    builder
      .addCase(loadApp.pending, (state) => {
        state.loadingStatus = STATUSES.PENDING;
      })
      .addCase(loadApp.fulfilled, (state) => {
        state.loadingStatus = STATUSES.FULFILLED;
        state.isAuthChecked = true;
      })
      .addCase(loadApp.rejected, (state) => {
        state.loadingStatus = STATUSES.REJECTED;
        state.isAuthChecked = true;
      });
  },
});

export const appActions = { ...appSlice.actions, load: loadApp };
export const {
  selectLoadingStatus: selectAppLoadingStatus,
  selectIsAuthChecked,
  selectIsMobile,
} = appSlice.selectors;
