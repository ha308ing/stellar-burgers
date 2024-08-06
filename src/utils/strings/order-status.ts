import type { IOrder, TObjectValues } from "types";

const orderStatusStrings = {
  created: "создан",
  done: "выполнен",
  pending: "готовится",
} as const;

export type TOrderStatusString = TObjectValues<typeof orderStatusStrings>;

export const translateOrderStatus = (status: IOrder["status"]) =>
  orderStatusStrings[status];
