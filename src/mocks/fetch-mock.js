import { API } from "utils/api";
import {
  ordersData,
  email,
  name,
  accessToken,
  refreshToken,
  orderName,
  orderNumber,
  ingredientsData,
} from "./data";

global.fetch = async function fetchMock(url, config) {
  const orderRegex = new RegExp(`^${API.ORDERS}/(\\d+)$`);
  const regexpResult = orderRegex.exec(url);
  if (regexpResult) {
    const orderNumber = regexpResult[1];
    const orders = ordersData.filter((o) => o.number === +orderNumber);

    return {
      ok: true,
      json: async () => ({
        orders,
      }),
    };
  }

  switch (url) {
    case API.INGREDIENTS: {
      return {
        ok: true,
        json: async () => ({
          success: true,
          data: ingredientsData,
        }),
      };
    }
    case API.AUTH.REGISTER: {
      try {
        const { email, password, name } = JSON.parse(config.body);
        return {
          ok: true,
          json: async () => ({
            success: true,
            user: {
              email,
              password,
              name,
            },
            accessToken,
            refreshToken,
          }),
        };
      } catch {
        return {
          ok: false,
          message: "failed to register",
        };
      }
    }
    case API.AUTH.LOGIN: {
      const { email, password } = JSON.parse(config.body);
      return {
        ok: true,
        json: async () => ({
          success: true,
          user: { email, password, name },
        }),
      };
    }
    case API.AUTH.TOKEN: {
      return {
        ok: true,
        json: async () => ({
          success: true,
          accessToken,
          refreshToken,
        }),
      };
    }
    case API.AUTH.USER: {
      return {
        ok: true,
        json: async () => ({
          success: true,
          user: { email, name },
        }),
      };
    }
    case API.AUTH.LOGOUT: {
      return {
        ok: true,
        json: async () => ({ success: true }),
      };
    }
    case API.ORDERS: {
      return {
        ok: true,
        json: async () => ({
          name: orderName,
          order: {
            number: orderNumber,
          },
        }),
      };
    }
    case API.PASSWORD.RENEW:
    case API.PASSWORD.RESET: {
      return {
        ok: true,
        json: async () => ({
          message: "ok",
        }),
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
};
