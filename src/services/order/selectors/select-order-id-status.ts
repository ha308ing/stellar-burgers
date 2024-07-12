import type { IOrderState } from "../initial-state";

export const selectOrderIdStatus = (state: IOrderState) => state.orderIdStatus;
