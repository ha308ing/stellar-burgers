import { createDraftSafeSelector } from "@reduxjs/toolkit";
import type { IOrdersFeedLocal } from "../initial-state";
import { STATUSES } from "utils";

const selectOrdersByNumbers = (state: IOrdersFeedLocal) => state.ordersByNumber;
const selectOrdersNumbers = (state: IOrdersFeedLocal) => state.ordersNumbers;
const selectStatus = (state: IOrdersFeedLocal) => state.status;
const selectTotal = (state: IOrdersFeedLocal) => state.total;
const selectTotalToday = (state: IOrdersFeedLocal) => state.totalToday;
const selectSuccess = (state: IOrdersFeedLocal) => state.success;
const selectMessage = (state: IOrdersFeedLocal) => state.message;

const ORDERS_LIMIT = 10;

export const selectOrdersFeed = createDraftSafeSelector(
  [
    selectOrdersByNumbers,
    selectOrdersNumbers,
    selectStatus,
    selectSuccess,
    selectTotal,
    selectTotalToday,
    selectMessage,
  ],
  (
    ordersByNumbers,
    ordersNumbers,
    status,
    success,
    total,
    totalToday,
    message,
  ) => {
    let doneCounter = 0,
      pendingCounter = 0;
    let orderNumbersDone = [];
    let orderNumbersPending = [];
    const isLoading = status === STATUSES.PENDING;
    const isError = status === STATUSES.REJECTED || success === false;
    const isNoOrders = ordersNumbers.length === 0;
    for (let orderNumber of ordersNumbers) {
      const order = ordersByNumbers[orderNumber];
      if (doneCounter >= ORDERS_LIMIT && pendingCounter >= ORDERS_LIMIT) break;
      if (order.status === "done" && doneCounter < ORDERS_LIMIT) {
        orderNumbersDone.push(order.number);
        doneCounter++;
      }
      if (
        (order.status === "pending" || order.status === "created") &&
        pendingCounter < ORDERS_LIMIT
      ) {
        orderNumbersPending.push(order.number);
        pendingCounter++;
      }
    }
    return {
      ordersByNumbers,
      ordersNumbers,
      isLoading,
      isError,
      isNoOrders,
      orderNumbersDone,
      orderNumbersPending,
      total,
      totalToday,
      message,
    };
  },
);
