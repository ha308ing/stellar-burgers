const BURGERS_API_ROOT = "https://norma.nomoreparties.space/api";
const INGREDIENTS_API_URL = BURGERS_API_ROOT + "/ingredients";
const API_TIMEOUT = 3000;

class BurgersApiService {
  basicRequest = (url, method = "GET", options = {}) => {
    const abortController = new AbortController();

    const requestPromise = new Promise(async (res, rej) => {
      try {
        setTimeout(() => {
          abortController.abort();
        }, API_TIMEOUT);

        const response = await fetch(url, {
          mode: "cors",
          headers: { "Content-type": "application/json" },
          method,
          signal: abortController.signal,
          ...options,
        });

        if (!response.ok) throw new Error(response);

        const data = await response.json();

        res(data);
      } catch (error) {
        rej(error);
      }
    });

    return { abortController, requestPromise };
  };

  getIngredients = (abortController) => this.basicRequest(INGREDIENTS_API_URL);
}

export const burgersApiService = new BurgersApiService();
