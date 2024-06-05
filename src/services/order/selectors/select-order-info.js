import { createSelector } from "@reduxjs/toolkit";
import { selectOrderId, selectOrderIdStatus, selectOrderName } from "./index";

export const selectOrderInfo = createSelector(
  [selectOrderId, selectOrderIdStatus, selectOrderName],
  (orderId, orderIdStatus, orderName) => ({
    orderId,
    orderIdStatus,
    orderName,
  }),
);
