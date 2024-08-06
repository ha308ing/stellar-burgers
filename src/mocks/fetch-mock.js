import { API } from "utils/api";

global.fetch = async function fetchMock(url, config) {
  const orderRegex = new RegExp(`^${API.ORDERS}/(\\d+)$`);
  const regexpResult = orderRegex.exec(url);
  if (regexpResult) {
    const orderNumber = regexpResult[1];
    const orders = [
      { number: 1, status: "created" },
      { number: 2, status: "done" },
      { number: 3, status: "pending" },
    ].filter((o) => o.number === +orderNumber);

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
          data: [],
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
            accessToken: "accessToken",
            refreshToken: "refreshToken",
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
          user: { email, password, name: "from-server" },
        }),
      };
    }
    case API.AUTH.TOKEN: {
      return {
        ok: true,
        json: async () => ({
          success: true,
          accessToken: "accessToken",
          refreshToken: "refreshToken",
        }),
      };
    }
    case API.AUTH.USER: {
      return {
        ok: true,
        json: async () => ({
          success: true,
          user: { email: "user@ema.il", name: "username" },
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
          name: "orderName",
          order: {
            number: 1,
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
