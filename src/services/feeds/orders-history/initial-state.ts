import type { IOrder, IOrderLocal } from "types";
import { STATUSES } from "utils";
import type { TConnectionStatus } from "utils";

export interface IOrdersHistory {
  success: boolean;
  total: number;
  totalToday: number;
  orders: IOrder[];
  status: TConnectionStatus;
}

export interface IOrderHistoryLocal extends Omit<IOrdersHistory, "orders"> {
  ordersNumbers: IOrderLocal["number"][];
  message: string;
  ordersByNumber: Record<string, IOrderLocal>;
}

export const initialState: IOrderHistoryLocal = {
  success: false,
  total: 0,
  totalToday: 0,
  ordersNumbers: [],
  status: STATUSES.PENDING,
  message: "",
  ordersByNumber: {},
};
