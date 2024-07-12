import { TConnectionStatus } from "utils";

export interface IOrderState {
  orderId: number | null;
  orderIdStatus: TConnectionStatus | null;
  orderName: string;
}

export const initialState: IOrderState = {
  orderId: null,
  orderIdStatus: null,
  orderName: "",
};
