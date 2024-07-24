import type { PayloadAction } from "@reduxjs/toolkit";
import type { IOrder, IOrderLocal } from "types";
import type { TConnectionStatus } from "utils";
import { STATUSES } from "utils";
import { translateOrderStatus } from "utils/strings";

interface IFeedMessage {
  orders: IOrder[];
  success: boolean;
  status: TConnectionStatus;
  message: string;
  total: number;
  totalToday: number;
}

interface IFeedState extends Omit<IFeedMessage, "orders"> {
  ordersNumbers: IOrderLocal["number"][];
  ordersByNumber: Record<string, IOrderLocal>;
}

export const onMessage = <
  T extends IFeedState,
  S extends Pick<IFeedMessage, "success" | "orders" | "total" | "totalToday">,
  F extends Pick<IFeedMessage, "success" | "message">,
>(
  state: T,
  action: PayloadAction<S | F>,
) => {
  const { success } = action.payload;
  state.success = success;
  let previousOrderNumber: IOrder["number"];

  if (success) {
    const { orders, total, totalToday } = (action as PayloadAction<S>).payload;
    const { ordersByNumber, ordersNumbers } = orders.reduce(
      (
        acc: {
          ordersByNumber: Record<number, IOrderLocal>;
          ordersNumbers: IOrder["number"][];
        },
        order,
      ) => {
        const orderNumber = order.number;
        const isOrderNumberLarger =
          previousOrderNumber == null || orderNumber > previousOrderNumber;
        previousOrderNumber = isOrderNumberLarger
          ? orderNumber
          : previousOrderNumber;
        const status = order.status;
        const statusLocal = translateOrderStatus(status);
        acc.ordersByNumber[orderNumber] = { ...order, statusLocal };
        if (isOrderNumberLarger) acc.ordersNumbers.unshift(orderNumber);
        else acc.ordersNumbers.push(orderNumber);
        return acc;
      },
      { ordersByNumber: {}, ordersNumbers: [] },
    );
    state.total = total;
    state.totalToday = totalToday;
    state.status = STATUSES.FULFILLED;
    state.message = "";
    state.ordersByNumber = ordersByNumber;
    state.ordersNumbers = ordersNumbers;
  } else {
    const { message } = (action as PayloadAction<F>).payload;
    state.message = message;
    state.status = STATUSES.REJECTED;
  }
};
