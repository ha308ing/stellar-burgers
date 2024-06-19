import { STRINGS } from "../strings";
import { API } from "./endpoints";
import { burgersApiController } from "./burgers-api-controller";
import { ErrorLocal } from "./error-local";

class BurgersApiService {
  basicRequest = (
    url,
    method = "GET",
    options = {},
    dataTransformator = null,
  ) => {
    return new Promise(async (res, rej) => {
      try {
        const data = await this.fetch(url, method, options, dataTransformator);
        res(data);
      } catch (error) {
        rej(error);
      }
    });
  };

  getIngredients = () =>
    this.basicRequest(API.INGREDIENTS, "GET", {}, ({ data }) => data);

  fetch = async (
    url,
    method = "GET",
    options = {},
    dataTransformator = null,
  ) => {
    const hasAuthorizationHeader = options?.headers?.authorization;
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
      if (!hasAuthorizationHeader) throw new ErrorLocal(error.message);

      const isTokenError = this.checkTokenError(error);
      if (isTokenError) {
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
          throw new ErrorLocal(error.message);
        }
      }
    }
  };

  postOrder = (orderIdsString) =>
    this.basicRequest(API.ORDERS, "POST", { body: orderIdsString }, (data) => {
      const { name, order } = data;
      const { number } = order;

      return { orderName: name, orderNumber: number };
    });

  checkTokenError = (error) => {
    return (
      error.message === STRINGS.JWT_EXPIRED ||
      error.message === STRINGS.JWT_INVALID
    );
  };

  register = (registerDataString) =>
    this.basicRequest(
      API.AUTH.REGISTER,
      "POST",
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

  login = (loginDataString) =>
    this.basicRequest(
      API.AUTH.LOGIN,
      "POST",
      { body: loginDataString },
      (data) => {
        const {
          user: { email, name },
          accessToken,
          refreshToken,
        } = data;
        return { email, name, accessToken, refreshToken };
      },
    );

  updateToken = (tokenDataString) =>
    this.basicRequest(
      API.AUTH.TOKEN,
      "POST",
      { body: tokenDataString },
      (data) => {
        const { accessToken, refreshToken } = data;
        return { accessToken, refreshToken };
      },
    );

  logout = (refreshTokenDataString) =>
    this.basicRequest(
      API.AUTH.LOGOUT,
      "POST",
      { body: refreshTokenDataString },
      (data) => {
        const { success } = data;
        return success;
      },
    );

  getUserInfo = (accessToken) =>
    this.basicRequest(
      API.AUTH.USER,
      "GET",
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

  updateUserInfo = (accessToken, userDataString) =>
    this.basicRequest(
      API.AUTH.USER,
      "PATCH",
      { body: userDataString, headers: { authorization: accessToken } },
      (data) => {
        const {
          user: { email, name },
        } = data;
        return { email, name };
      },
    );

  requestPasswordResetCode = (emailDataString) =>
    this.basicRequest(
      API.PASSWORD.RESET,
      "POST",
      { body: emailDataString },
      (data) => {
        const { message } = data;
        return message;
      },
    );

  resetPassword = (accessToken, resetDataString) =>
    this.basicRequest(
      API.PASSWORD.RENEW,
      "POST",
      { body: resetDataString, headers: { authorization: accessToken } },
      (data) => {
        const { message } = data;
        return message;
      },
    );
}

export const burgersApiService = new BurgersApiService();
