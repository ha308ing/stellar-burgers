import { TConnectionStatus } from "../../utils/connection-statuses";

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
