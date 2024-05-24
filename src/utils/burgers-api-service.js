const BURGERS_API_ROOT = "https://norma.nomoreparties.space/api";
const INGREDIENTS_API_URL = BURGERS_API_ROOT + "/ingredients";
const API_TIMEOUT = 3000;

class BurgersApiService {
  basicRequest =
    (successHandler, errorHandler) =>
    (url, method = "GET", options = {}) => {
      const controller = new AbortController();

      const request = fetch(url, {
        mode: "cors",
        headers: { "Content-type": "application/json" },
        method,
        signal: controller.signal,
        ...options,
      });

      request
        .then((response) => {
          if (!response.ok) throw Error();
          successHandler(response);
        })
        .catch((error) => {
          errorHandler(error);
        });

      setTimeout(() => {
        controller.abort();
      }, API_TIMEOUT);

      return controller;
    };

  getIngredients = (stateSetter) => {
    const successHandler = async (response) => {
      const { data } = await response.json();
      stateSetter({ status: "ok", data });
    };

    const errorHandler = () => stateSetter({ status: "error", data: [] });

    return this.basicRequest(successHandler, errorHandler)(INGREDIENTS_API_URL);
  };
}

export const burgersService = new BurgersApiService();
