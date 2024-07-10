import { IOrderState } from "../initial-state";

export const selectOrderName = (state: IOrderState) => state.orderName;
