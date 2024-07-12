import type { IOrderState } from "../initial-state";

export const selectOrderId = (state: IOrderState) => state.orderId;
