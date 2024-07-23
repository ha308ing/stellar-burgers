import type { PayloadAction } from "@reduxjs/toolkit";
import type { TConnectionStatus } from "utils";
import { STATUSES } from "utils";

interface IState {
  status: TConnectionStatus;
  message: string;
}

export const connect = <T extends IState>(state: T) => {
  state.status = STATUSES.PENDING;
};

export const onError = <T extends IState>(
  state: T,
  action: PayloadAction<string>,
) => {
  state.message = action.payload;
  state.status = STATUSES.REJECTED;
};
