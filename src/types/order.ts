import type { IIngredient } from "types/ingredient";
import type { TOrderStatusString } from "utils/strings";

export interface IOrder {
  updatedAt: string;
  createdAt: string;
  status: "created" | "pending" | "done";
  _id: string;
  ingredients: IIngredient["_id"][];
  name: string;
  number: number;
}

export interface IOrderLocal extends IOrder {
  statusLocal: TOrderStatusString;
}
