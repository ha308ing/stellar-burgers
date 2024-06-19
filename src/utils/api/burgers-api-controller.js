import { burgersApiService } from "./burgers-api-service";

const KEY_ACCESS = "accessToken";
const KEY_REFRESH = "refreshToken";

class BurgersApiController {
  getIngredients = async () => {
    const ingredients = await burgersApiService.getIngredients();
    return ingredients;
  };

  register = async (registerData) => {
    const registerDataString = JSON.stringify(registerData);

    const { email, name, accessToken, refreshToken } =
      await burgersApiService.register(registerDataString);

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { email, name };
  };

  login = async (loginData) => {
    const loginDataString = JSON.stringify(loginData);

    const { email, name, accessToken, refreshToken } =
      await burgersApiService.login(loginDataString);

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { email, name };
  };

  updateToken = async () => {
    const token = localStorage.getItem(KEY_REFRESH);
    const tokenDataString = JSON.stringify({ token });

    const { accessToken, refreshToken } =
      await burgersApiService.updateToken(tokenDataString);

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { accessToken, refreshToken };
  };

  getUserInfo = async () => {
    const accessToken = localStorage.getItem(KEY_ACCESS);

    const { email, name } = await burgersApiService.getUserInfo(accessToken);

    return { email, name };
  };

  updateUserInfo = async (userData) => {
    const accessToken = localStorage.getItem(KEY_ACCESS);
    const userDataString = JSON.stringify(userData);

    const { email, name } = await burgersApiService.updateUserInfo(
      accessToken,
      userDataString,
    );

    return { email, name };
  };

  logout = async () => {
    const token = localStorage.getItem(KEY_REFRESH);
    const tokenDataString = JSON.stringify({ token });

    const success = await burgersApiService.logout(tokenDataString);

    localStorage.removeItem(KEY_REFRESH);
    localStorage.removeItem(KEY_ACCESS);

    return success;
  };

  requestPasswordResetCode = async (emailData) => {
    const emailDataString = JSON.stringify(emailData);

    const response =
      await burgersApiService.requestPasswordResetCode(emailDataString);

    return response;
  };

  resetPassword = async (resetData) => {
    const accessToken = localStorage.getItem(KEY_ACCESS);
    const resetDataString = JSON.stringify(resetData);

    const response = await burgersApiService.resetPassword(
      accessToken,
      resetDataString,
    );

    return response;
  };

  checkToken = async () => {
    const accessToken = localStorage.getItem(KEY_ACCESS);
    if (!accessToken) return true;
    await this.getUserInfo();
    return true;
  };

  postOrder = async (orderIds) => {
    const orderIdsString = JSON.stringify({ ingredients: orderIds });

    const { orderName, orderNumber } =
      await burgersApiService.postOrder(orderIdsString);

    return { orderName, orderNumber };
  };
}

export const burgersApiController = new BurgersApiController();
