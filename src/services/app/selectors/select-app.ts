import { createDraftSafeSelector } from "@reduxjs/toolkit";
import type { ILoadAppState } from "../initial-state";
import { STATUSES } from "utils";

const selectStatus = (state: ILoadAppState) => state.loadingStatus;

export const selectLoadingStatus = createDraftSafeSelector(
  selectStatus,
  (status) => ({
    isPending: status === STATUSES.PENDING || status == null,
    isRejected: status === STATUSES.REJECTED,
    isFulfilled: status === STATUSES.FULFILLED,
  }),
);

export const selectIsAuthChecked = (state: ILoadAppState) =>
  state.isAuthChecked;

export const selectIsMobile = (state: ILoadAppState) => state.isMobile;
