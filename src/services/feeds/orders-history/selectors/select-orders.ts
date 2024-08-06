import { createDraftSafeSelector } from "@reduxjs/toolkit";
import type { IOrderHistoryLocal } from "../initial-state";
import { STATUSES } from "utils";

const selectOrdersNumbers = (state: IOrderHistoryLocal) => state.ordersNumbers;
const selectOrdersByNumbers = (state: IOrderHistoryLocal) =>
  state.ordersByNumber;
const selectStatus = (state: IOrderHistoryLocal) => state.status;
const selectTotal = (state: IOrderHistoryLocal) => state.total;
const selectTotalToday = (state: IOrderHistoryLocal) => state.totalToday;
const selectMessage = (state: IOrderHistoryLocal) => state.message;
const selectSuccess = (state: IOrderHistoryLocal) => state.success;

export const selectOrdersHistory = createDraftSafeSelector(
  [
    selectOrdersNumbers,
    selectOrdersByNumbers,
    selectStatus,
    selectTotal,
    selectTotalToday,
    selectMessage,
    selectSuccess,
  ],
  (
    ordersNumbers,
    ordersByNumbers,
    status,
    total,
    totalToday,
    message,
    success,
  ) => {
    const isLoading = status === STATUSES.PENDING;
    const isError = status === STATUSES.REJECTED || success === false;
    const isNoOrders = ordersNumbers.length === 0;
    return {
      ordersNumbers,
      ordersByNumbers,
      isLoading,
      isNoOrders,
      total,
      totalToday,
      isError,
      message,
    };
  },
);
