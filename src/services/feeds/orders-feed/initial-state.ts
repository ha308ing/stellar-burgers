import type { IOrder, IOrderLocal } from "types";
import { STATUSES } from "utils";
import type { TConnectionStatus } from "utils";

export interface IOrdersFeed {
  success: boolean;
  total: number;
  totalToday: number;
  orders: IOrder[];
  status: TConnectionStatus;
}

export interface IOrdersFeedLocal extends Omit<IOrdersFeed, "orders"> {
  ordersNumbers: IOrderLocal["number"][];
  message: string;
  ordersByNumber: Record<string, IOrderLocal>;
}

export const initialState: IOrdersFeedLocal = {
  success: false,
  total: 0,
  totalToday: 0,
  ordersNumbers: [],
  status: STATUSES.PENDING,
  message: "",
  ordersByNumber: {},
};
