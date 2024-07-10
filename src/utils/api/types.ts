import { IIngredient } from "../../types";

export const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
} as const;

export type THTTP_METHOD = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];

interface ISuccess {
  success: boolean;
}

interface IMessage {
  message: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserData {
  email: string;
  name: string;
}

export interface IUserDataPassword extends IUserData {
  password: string;
}

interface IUser {
  user: IUserData;
}

export interface IResponseError extends ISuccess, IMessage {}

export interface IRegisterResponse extends ISuccess, IUser, ITokens {}

export interface ILoginResponse extends ISuccess, IUser, ITokens {}

export interface ILogoutResponse extends ISuccess, IMessage {}

export interface IUserResponse extends ISuccess, IUser {}

export interface IPasswordResetResponse extends ISuccess, IMessage {}

export interface IPasswordRenewResponse extends ISuccess, IMessage {}

export interface IUpdateTokenResponse extends ISuccess, ITokens {}

export interface IIngredientsResponse extends ISuccess {
  data: IIngredient[];
}

export interface IOrderResponse extends ISuccess {
  name: string;
  order: {
    number: number;
  };
}

export function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export type TOrderIds = IIngredient["_id"][];

type TOrderName = Pick<IOrderResponse, "name">;
type TOrderNumber = Pick<IOrderResponse["order"], "number">;

export interface IOrderInfo {
  orderName: TOrderName["name"];
  orderNumber: TOrderNumber["number"];
}
