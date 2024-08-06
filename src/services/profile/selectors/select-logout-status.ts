import { selectMessage } from "./select-message";
import type { IProfileState } from "../initial-state";
import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { STATUSES } from "utils";

const selectStatus = (state: IProfileState) => state.logoutStatus;

export const selectLogoutStatus = createDraftSafeSelector(
  [selectStatus, selectMessage],
  (status, message) => ({
    isPending: status === STATUSES.PENDING,
    isRejected: status === STATUSES.REJECTED,
    isFulfilled: status === STATUSES.FULFILLED,
    message,
  }),
);
