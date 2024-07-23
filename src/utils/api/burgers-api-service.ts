import { STRINGS } from "../strings";
import type { TAPI } from "./endpoints";
import { API } from "./endpoints";
import { burgersApiController } from "./burgers-api-controller";
import { ErrorLocal } from "./error-local";
import type { IIngredient } from "types";
import type {
  IIngredientsResponse,
  ILoginResponse,
  ILogoutResponse,
  IOrder,
  IOrderInfoResponce,
  IOrderResponse,
  IPasswordRenewResponse,
  IPasswordResetResponse,
  IRegisterResponse,
  IUpdateTokenResponse,
  IUserResponse,
  THTTP_METHOD,
} from "./types";
import { HTTP_METHOD, isError } from "./types";

class BurgersApiService {
  basicRequest = <U = unknown, T = null>(
    url: TAPI | string,
    method: THTTP_METHOD = HTTP_METHOD.GET,
    options: Omit<RequestInit, "method"> = {},
    dataTransformator: null | ((data: U) => T) = null,
  ): Promise<T> => {
    return new Promise(async (res, rej) => {
      try {
        const data = await this.fetch<T, U>(
          url,
          method,
          options,
          dataTransformator,
        );
        res(data);
      } catch (error) {
        rej(error);
      }
    });
  };

  getIngredients = () =>
    this.basicRequest<IIngredientsResponse, IIngredient[]>(
      API.INGREDIENTS,
      HTTP_METHOD.GET,
      {},
      ({ data }) => data,
    );

  fetch = async <T = null, U = unknown>(
    url: TAPI | string,
    method: THTTP_METHOD = HTTP_METHOD.GET,
    options: Omit<RequestInit, "method"> = {},
    dataTransformator: null | ((data: U) => T) = null,
  ): Promise<never | T> => {
    const hasAuthorizationHeader =
      options?.headers && Object.hasOwn(options.headers, "authorization");
    const headers = {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    };

    try {
      const response = await fetch(url, {
        mode: "cors",
        method,
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        const message = data.message || STRINGS.REQUEST_FAILED;
        throw new ErrorLocal(message);
      }

      if (!dataTransformator) return data;

      const dataTransformed = dataTransformator(data);
      return dataTransformed;
    } catch (error) {
      if (!isError(error)) throw error;
      const shouldUpdateToken =
        hasAuthorizationHeader && this.shouldUpdateToken(error);

      if (shouldUpdateToken) {
        try {
          const { accessToken } = await burgersApiController.updateToken();
          return this.fetch(
            url,
            method,
            {
              ...options,
              headers: { ...headers, authorization: accessToken },
            },
            dataTransformator,
          );
        } catch (error) {
          if (!isError(error)) throw error;
          throw new ErrorLocal(error.message);
        }
      }

      throw new ErrorLocal(error.message);
    }
  };

  postOrder = (accessToken: string, orderIdsString: string) =>
    this.basicRequest<
      IOrderResponse,
      { orderName: string; orderNumber: number }
    >(
      API.ORDERS,
      HTTP_METHOD.POST,
      { body: orderIdsString, headers: { authorization: accessToken } },
      (data) => {
        const { name, order } = data;
        const { number } = order;

        return { orderName: name, orderNumber: number };
      },
    );

  shouldUpdateToken = (error: Error) => {
    const hasRefreshToken = burgersApiController.hasRefreshToken();

    return (
      error.message === STRINGS.JWT_EXPIRED ||
      error.message === STRINGS.JWT_INVALID ||
      hasRefreshToken
    );
  };

  register = (registerDataString: string) =>
    this.basicRequest<
      IRegisterResponse,
      { email: string; name: string; refreshToken: string; accessToken: string }
    >(
      API.AUTH.REGISTER,
      HTTP_METHOD.POST,
      { body: registerDataString },
      (data) => {
        const {
          user: { email, name },
          accessToken,
          refreshToken,
        } = data;
        return { email, name, accessToken, refreshToken };
      },
    );

  login = (loginDataString: string) =>
    this.basicRequest<
      ILoginResponse,
      { email: string; name: string; refreshToken: string; accessToken: string }
    >(API.AUTH.LOGIN, HTTP_METHOD.POST, { body: loginDataString }, (data) => {
      const {
        user: { email, name },
        accessToken,
        refreshToken,
      } = data;
      return { email, name, accessToken, refreshToken };
    });

  updateToken = (tokenDataString: string) =>
    this.basicRequest<
      IUpdateTokenResponse,
      { accessToken: string; refreshToken: string }
    >(API.AUTH.TOKEN, HTTP_METHOD.POST, { body: tokenDataString }, (data) => {
      const { accessToken, refreshToken } = data;
      return { accessToken, refreshToken };
    });

  logout = (refreshTokenDataString: string) =>
    this.basicRequest<ILogoutResponse, boolean>(
      API.AUTH.LOGOUT,
      HTTP_METHOD.POST,
      { body: refreshTokenDataString },
      (data) => {
        const { success } = data;
        return success;
      },
    );

  getUserInfo = (accessToken: string) =>
    this.basicRequest<IUserResponse, { email: string; name: string }>(
      API.AUTH.USER,
      HTTP_METHOD.GET,
      {
        headers: { authorization: accessToken },
      },
      (data) => {
        const {
          user: { email, name },
        } = data;
        return { email, name };
      },
    );

  updateUserInfo = (accessToken: string, userDataString: string) =>
    this.basicRequest<IUserResponse, { email: string; name: string }>(
      API.AUTH.USER,
      HTTP_METHOD.PATCH,
      { body: userDataString, headers: { authorization: accessToken } },
      (data) => {
        const {
          user: { email, name },
        } = data;
        return { email, name };
      },
    );

  requestPasswordResetCode = (emailDataString: string) =>
    this.basicRequest<IPasswordResetResponse, string>(
      API.PASSWORD.RESET,
      HTTP_METHOD.POST,
      { body: emailDataString },
      (data) => {
        const { message } = data;
        return message;
      },
    );

  resetPassword = (accessToken: string, resetDataString: string) =>
    this.basicRequest<IPasswordRenewResponse, string>(
      API.PASSWORD.RENEW,
      HTTP_METHOD.POST,
      { body: resetDataString, headers: { authorization: accessToken } },
      (data) => {
        const { message } = data;
        return message;
      },
    );

  getOrder = (orderNumber: string) =>
    this.basicRequest<IOrderInfoResponce, IOrder>(
      `${API.ORDERS}/${orderNumber}`,
      HTTP_METHOD.GET,
      {},
      (data) => {
        const { orders } = data;
        return orders[0];
      },
    );
}

export const burgersApiService = new BurgersApiService();
