import { burgersApiController } from "utils/api/burgers-api-controller";
import {
  email,
  name,
  password,
  ingredientsData,
  orderNumber,
  order,
} from "mocks/data";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const tokens = { accesToken: ACCESS_TOKEN, refreshToken: REFRESH_TOKEN };
const registerInput = { email, name, password };
const loginInput = { email, password };

describe("test api controller", () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn((key) => tokens[key]);
  });

  describe("test getIngredients", () => {
    it("getIngredients should return array with ingredients", () => {
      expect.assertions(1);

      return burgersApiController.getIngredients().then((data) => {
        expect(data).toBeInstanceOf(Array);
      });
    });

    it("getIngredients should throw error if response is not ok", () => {
      const message = "failed to get ingredients";

      jest.spyOn(global, "fetch").mockResolvedValue({
        ok: false,
        json: async () => ({ success: true, message }),
      });

      expect.assertions(1);

      return expect(burgersApiController.getIngredients).rejects.toThrowError(
        message,
      );
    });
  });

  describe("test register", () => {
    it("register with email and password should return an object with email, name and password", () => {
      expect.assertions(1);

      return burgersApiController.register(registerInput).then((data) => {
        expect(data).toEqual(registerInput);
      });
    });

    it("register should set accessToken and refreshToken", () => {
      expect.assertions(2);

      return burgersApiController.register(registerInput).then((data) => {
        expect(localStorage.setItem).toBeCalledWith(ACCESS_TOKEN, ACCESS_TOKEN);
        expect(localStorage.setItem).toBeCalledWith(
          REFRESH_TOKEN,
          REFRESH_TOKEN,
        );
      });
    });
  });

  describe("test login", () => {
    it("login should return email, name, password and set tokens", () => {
      const userData = { ...loginInput, name: registerInput[name] };

      jest.spyOn(global, "fetch").mockResolvedValue({
        ok: true,
        json: async () => ({
          user: userData,
        }),
      });

      expect.assertions(2);

      return burgersApiController.login(loginInput).then((data) => {
        expect(data).toEqual(userData);
        expect(localStorage.setItem).toBeCalledTimes(2);
      });
    });
  });

  it("logout should remove accessToken and refreshToken", () => {
    expect.assertions(1);

    return burgersApiController.logout().then((data) => {
      expect(localStorage.removeItem).toBeCalledTimes(2);
    });
  });

  describe("test updateToken", () => {
    it("should get refreshToken and set accessToken and new refreshToken", () => {
      Storage.prototype.getItem = jest.fn(() => REFRESH_TOKEN);

      expect.assertions(3);

      return burgersApiController
        .updateToken()
        .then(({ accessToken, refreshToken }) => {
          expect(localStorage.getItem).toBeCalledWith(REFRESH_TOKEN);
          expect(localStorage.setItem).toBeCalledWith(
            ACCESS_TOKEN,
            accessToken,
          );
          expect(localStorage.setItem).toBeCalledWith(
            REFRESH_TOKEN,
            refreshToken,
          );
        });
    });

    it("should throw error if no refresh token", () => {
      Storage.prototype.getItem = jest.fn((_) => null);

      expect.assertions(1);

      return expect(burgersApiController.updateToken()).rejects.toThrowError(
        "no refresh token",
      );
    });
  });

  describe("test getToken", () => {
    beforeEach(() => {
      Storage.prototype.getItem = jest.fn((_) => "Bearer token");
    });

    it("should return token", () => {
      expect(burgersApiController.getToken()).toBe("Bearer token");
    });

    it("should return token without bearer", () => {
      expect(burgersApiController.getToken(true)).toBe("token");
    });

    it("if no token should return empty string", () => {
      Storage.prototype.getItem = jest.fn((_) => null);

      expect(burgersApiController.getToken(true)).toBe("");
    });
  });

  describe("test getUserInfo", () => {
    it("should get accessToken from localStorage and return email and name", () => {
      expect.assertions(2);

      return burgersApiController.getUserInfo().then((data) => {
        expect(localStorage.getItem).toBeCalledWith(ACCESS_TOKEN);
        expect(data).toEqual({ email, name });
      });
    });

    it("should update tokens if accessToken is invalid", () => {
      const updateTokenSpy = jest.spyOn(burgersApiController, "updateToken");

      let isSecondAccessTokenAttempt = true;
      Storage.prototype.getItem = jest.fn((key) => {
        if (key === ACCESS_TOKEN) isSecondAccessTokenAttempt = true;
        const token =
          key === REFRESH_TOKEN
            ? REFRESH_TOKEN
            : isSecondAccessTokenAttempt
              ? ACCESS_TOKEN
              : null;
        return token;
      });

      const fetchSpy = jest
        .spyOn(global, "fetch")
        .mockImplementationOnce(() => ({
          ok: false,
          json: async () => ({
            success: false,
            message: "jwt expired",
          }),
        }));

      expect.assertions(5);

      return burgersApiController.getUserInfo().then((data) => {
        expect(localStorage.getItem).toBeCalledWith(ACCESS_TOKEN);
        expect(updateTokenSpy).toBeCalledTimes(1);
        expect(localStorage.setItem).toBeCalledWith(ACCESS_TOKEN, ACCESS_TOKEN);
        expect(localStorage.setItem).toBeCalledWith(
          REFRESH_TOKEN,
          REFRESH_TOKEN,
        );
        expect(fetchSpy).toBeCalledTimes(3);
      });
    });
  });

  describe("test hasRefreshToken", () => {
    it("hasRefreshToken should return true if there is a token", () => {
      expect(burgersApiController.hasRefreshToken()).toBe(true);
    });

    it("hasRefreshToken should return false if there is no token", () => {
      Storage.prototype.getItem = jest.fn((key) =>
        key === REFRESH_TOKEN ? null : key,
      );

      expect(burgersApiController.hasRefreshToken()).toBe(false);
    });
  });

  describe("test getOrder", () => {
    it("invalid orderNumber should return null", () => {
      expect.assertions(1);

      return burgersApiController.getOrder(0).then((order) => {
        expect(order).toBeNull();
      });
    });

    it("valid orderNumber should return order info", () => {
      expect.assertions(1);

      return burgersApiController
        .getOrder(orderNumber)
        .then((orderResponse) => expect(orderResponse).toEqual(order));
    });

    it("order info should contain localStatus", () => {
      expect.assertions(1);

      return burgersApiController
        .getOrder(48111)
        .then((order) =>
          expect(order).toHaveProperty("statusLocal", "выполнен"),
        );
    });
  });

  it("updateUserInfo should return input", () => {
    const input = { email, name };

    expect.assertions(1);

    return burgersApiController.updateUserInfo(input).then((data) => {
      expect(data).toStrictEqual(input);
    });
  });

  it("load app should return user info and ingredients", () => {
    expect.assertions(2);

    return burgersApiController.loadApp().then(({ userInfo, ingredients }) => {
      expect(userInfo).toEqual({
        status: "fulfilled",
        value: { email, name },
      });
      expect(ingredients).toEqual({
        status: "fulfilled",
        value: ingredientsData,
      });
    });
  });

  describe("test postOrder", () => {
    it("should return order name and number", () => {
      expect.assertions(2);

      return burgersApiController.postOrder([]).then((data) => {
        expect(data).toHaveProperty("orderName");
        expect(data).toHaveProperty("orderNumber");
      });
    });

    it("should get accessToken", () => {
      expect.assertions(1);

      return burgersApiController.postOrder([]).then(() => {
        expect(localStorage.getItem).toBeCalledWith(ACCESS_TOKEN);
      });
    });
  });

  describe("test password reset", () => {
    it("requestPasswordResetCode should return string", () => {
      expect.assertions(1);

      return burgersApiController
        .requestPasswordResetCode({ email })
        .then((data) => {
          expect(data).toBe("ok");
        });
    });

    it("resetPassword should return string", () => {
      expect.assertions(1);

      return burgersApiController
        .resetPassword({ email, token: "token" })
        .then((data) => {
          expect(data).toBe("ok");
        });
    });
  });
});
