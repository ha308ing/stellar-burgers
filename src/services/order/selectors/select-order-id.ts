import { IOrderState } from "../initial-state";

export const selectOrderId = (state: IOrderState) => state.orderId;
