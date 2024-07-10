import { IOrderState } from "../initial-state";

export const selectOrderIdStatus = (state: IOrderState) => state.orderIdStatus;
