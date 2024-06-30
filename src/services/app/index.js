import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { loadApp } from "./thunks/load-app";
import { STATUSES } from "../../utils";

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
  selectors: {
    selectLoadingStatus: (state) => state.loadingStatus,
    selectIsAuthChecked: (state) => state.isAuthChecked,
    selectIsMobile: (state) => state.isMobile,
  },
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

export const selectApp = appSlice.selectSlice;
export const appActions = { ...appSlice.actions, load: loadApp };
export const { selectLoadingStatus, selectIsAuthChecked, selectIsMobile } =
  appSlice.selectors;
