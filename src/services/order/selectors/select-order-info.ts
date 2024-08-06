import { createSelector } from "@reduxjs/toolkit";
import type { IOrderState } from "../initial-state";
import { STATUSES } from "utils";

const selectOrderIdStatus = (state: IOrderState) => state.orderIdStatus;
const selectOrderId = (state: IOrderState) => state.orderId;
const selectOrderName = (state: IOrderState) => state.orderName;

export const selectOrderInfo = createSelector(
  [selectOrderId, selectOrderIdStatus, selectOrderName],
  (orderId, orderIdStatus, orderName) => ({
    orderId,
    isPending: orderIdStatus === STATUSES.PENDING,
    isRejected: orderIdStatus === STATUSES.REJECTED,
    isFulfilled: orderIdStatus === STATUSES.FULFILLED,
    orderName,
  }),
);
