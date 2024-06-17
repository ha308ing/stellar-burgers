import { burgersApiService } from "./burgers-api-service";

const KEY_ACCESS = "accessToken";
const KEY_REFRESH = "refreshToken";

class BurgersApiController {
  getIngredients = burgersApiService.getIngredients().requestPromise;

  getIngredientsToState = (stateSetter) => {
    const { abortController, requestPromise } =
      burgersApiService.getIngredients();

    requestPromise
      .then((data) => {
        stateSetter({ status: "ok", data });
      })
      .catch((_) => {
        stateSetter({ status: "error", data: [] });
      });

    return abortController;
  };

  register = async (registerData) => {
    const registerDataString = JSON.stringify(registerData);

    const { requestPromise } = burgersApiService.register(registerDataString);
    const { email, name, accessToken, refreshToken } = await requestPromise;

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { email, name };
  };

  login = async (loginData) => {
    const loginDataString = JSON.stringify(loginData);

    const { requestPromise } = burgersApiService.login(loginDataString);
    const { email, name, accessToken, refreshToken } = await requestPromise;

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { email, name };
  };

  updateToken = async () => {
    const token = localStorage.getItem(KEY_REFRESH);
    const tokenDataString = JSON.stringify({ token });

    const { requestPromise } = burgersApiService.updateToken(tokenDataString);
    const { accessToken, refreshToken } = await requestPromise;

    localStorage.setItem(KEY_ACCESS, accessToken);
    localStorage.setItem(KEY_REFRESH, refreshToken);

    return { accessToken, refreshToken };
  };

  getUserInfo = async () => {
    const accessToken = localStorage.getItem(KEY_ACCESS);

    const { requestPromise } = burgersApiService.getUserInfo(accessToken);
    const { email, name } = await requestPromise;

    return { email, name };
  };

  updateUserInfo = async (userData) => {
    const accessToken = localStorage.getItem(KEY_ACCESS);
    const userDataString = JSON.stringify(userData);

    const { requestPromise } = burgersApiService.updateUserInfo(
      accessToken,
      userDataString,
    );
    const { email, name } = await requestPromise;

    return { email, name };
  };

  logout = async () => {
    const token = localStorage.getItem(KEY_REFRESH);
    const tokenDataString = JSON.stringify({ token });

    const { requestPromise } = burgersApiService.logout(tokenDataString);
    const success = await requestPromise;

    localStorage.removeItem(KEY_REFRESH);
    localStorage.removeItem(KEY_ACCESS);

    return success;
  };

  requestPasswordResetCode = async (emailData) => {
    const emailDataString = JSON.stringify(emailData);

    const { requestPromise } =
      burgersApiService.requestPasswordResetCode(emailDataString);
    const response = await requestPromise;

    return response;
  };

  resetPassword = async (resetData) => {
    const accessToken = localStorage.getItem(KEY_ACCESS);
    const resetDataString = JSON.stringify(resetData);

    const { requestPromise } = burgersApiService.resetPassword(
      accessToken,
      resetDataString,
    );
    const response = await requestPromise;

    return response;
  };

  checkToken = async () => {
    const accessToken = localStorage.getItem(KEY_ACCESS);
    if (!accessToken) return true;
    await this.getUserInfo();
    return true;
  };
}

export const burgersApiController = new BurgersApiController();
