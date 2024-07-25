import type { IIngredient } from "types";
import { burgersApiService } from "./burgers-api-service";
import { ErrorLocal } from "./error-local";
import type {
  ITokens,
  IUserData,
  IOrderInfo,
  IFormLoginInputs,
  IFormPasswordForgotInputs,
  IFormRegisterInputs,
  IFormPasswordResetInputs,
} from "./types";
import { translateOrderStatus } from "utils/strings";

const KEY_ACCESS = "accessToken";
const KEY_REFRESH = "refreshToken";

class BurgersApiController {
  getIngredients = async (): Promise<IIngredient[]> => {
    const ingredients = await burgersApiService.getIngredients();
    return ingredients;
  };

  register = async (registerData: IFormRegisterInputs): Promise<IUserData> => {
    const registerDataString = JSON.stringify(registerData);

    const { email, name, accessToken, refreshToken } =
      await burgersApiService.register(registerDataString);

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { email, name };
  };

  login = async (loginData: IFormLoginInputs): Promise<IUserData> => {
    const loginDataString = JSON.stringify(loginData);

    const { email, name, accessToken, refreshToken } =
      await burgersApiService.login(loginDataString);

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { email, name };
  };

  updateToken = async (): Promise<ITokens> => {
    const token = localStorage.getItem(KEY_REFRESH);
    if (!token) throw new ErrorLocal("no refresh token");

    const tokenDataString = JSON.stringify({ token });

    const { accessToken, refreshToken } =
      await burgersApiService.updateToken(tokenDataString);

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { accessToken, refreshToken };
  };

  getUserInfo = async (): Promise<IUserData> => {
    const accessToken = localStorage.getItem(KEY_ACCESS) ?? "";

    const { email, name } = await burgersApiService.getUserInfo(accessToken);

    return { email, name };
  };

  updateUserInfo = async (userData: IUserData): Promise<IUserData> => {
    const accessToken = localStorage.getItem(KEY_ACCESS) ?? "";

    const userDataString = JSON.stringify(userData);

    const { email, name } = await burgersApiService.updateUserInfo(
      accessToken,
      userDataString,
    );

    return { email, name };
  };

  logout = async (): Promise<boolean> => {
    const token = localStorage.getItem(KEY_REFRESH) ?? "";

    const tokenDataString = JSON.stringify({ token });

    const success = await burgersApiService.logout(tokenDataString);

    localStorage.removeItem(KEY_REFRESH);
    localStorage.removeItem(KEY_ACCESS);

    return success;
  };

  requestPasswordResetCode = async (
    emailData: IFormPasswordForgotInputs,
  ): Promise<string> => {
    const emailDataString = JSON.stringify(emailData);

    const response =
      await burgersApiService.requestPasswordResetCode(emailDataString);

    return response;
  };

  resetPassword = async (
    resetData: IFormPasswordResetInputs,
  ): Promise<string> => {
    const accessToken = localStorage.getItem(KEY_ACCESS);
    const resetDataString = JSON.stringify(resetData);

    const response = await burgersApiService.resetPassword(
      accessToken!,
      resetDataString,
    );

    return response;
  };

  hasRefreshToken = (): boolean => {
    return !!localStorage.getItem(KEY_REFRESH);
  };

  postOrder = async (orderIds: IIngredient["_id"][]): Promise<IOrderInfo> => {
    const orderIdsString = JSON.stringify({ ingredients: orderIds });
    const accessToken = localStorage.getItem(KEY_ACCESS);

    const { orderName, orderNumber } = await burgersApiService.postOrder(
      accessToken!,
      orderIdsString,
    );

    return { orderName, orderNumber };
  };

  loadApp = async (): Promise<{
    userInfo: PromiseSettledResult<IUserData>;
    ingredients: PromiseSettledResult<IIngredient[]>;
  }> => {
    const userInfoPromise = this.getUserInfo();
    const ingredientsPromise = this.getIngredients();

    const response = await Promise.allSettled([
      userInfoPromise,
      ingredientsPromise,
    ]);

    const [userInfo, ingredients] = response;

    return { userInfo, ingredients };
  };

  getToken = (noBearer = false) => {
    let accessToken = localStorage.getItem(KEY_ACCESS);

    if (accessToken == null) return "";

    return noBearer ? accessToken.substring(7) : accessToken;
  };

  getOrder = async (orderNumber: string) => {
    const { owner, ...order } = await burgersApiService.getOrder(orderNumber);
    const statusLocal = translateOrderStatus(order.status);
    return { ...order, statusLocal };
  };
}

export const burgersApiController = new BurgersApiController();
