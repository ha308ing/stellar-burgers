const BURGERS_API_ROOT = "https://norma.nomoreparties.space/api";
const INGREDIENTS_API_URL = BURGERS_API_ROOT + "/ingredients";
const ORDER_API_URL = BURGERS_API_ROOT + "/orders";
const API_TIMEOUT = 3000;

class BurgersApiService {
  basicRequest = (url, method = "GET", options = {}, dataTransformator) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const requestPromise = new Promise(async (res, rej) => {
      try {
        setTimeout(() => {
          abortController.abort();
        }, API_TIMEOUT);

        const data = await this.fetch(
          url,
          method,
          { signal, ...options },
          dataTransformator,
        );
        res(data);
      } catch (error) {
        rej(error);
      }
    });

    return { abortController, requestPromise };
  };

  getIngredients = () => this.basicRequest(INGREDIENTS_API_URL);

  fetch = async (url, method = "GET", options = {}, dataTransformator) => {
    const response = await fetch(url, {
      mode: "cors",
      headers: { "Content-type": "application/json" },
      method,
      ...options,
    });

    if (!response.ok) throw new Error(response);

    const data = await response.json();
    if (!dataTransformator) return data;

    const dataTransformed = dataTransformator(data);
    return dataTransformed;
  };

  fetchIngredients = () =>
    this.fetch(INGREDIENTS_API_URL, "GET", {}, ({ data }) => data);

  postOrder = (orderArray) =>
    this.basicRequest(ORDER_API_URL, "POST", { body: orderArray }, (data) => {
      const { name, order } = data;
      const { number } = order;
      return { orderName: name, orderNumber: number };
    });
}

export const burgersApiService = new BurgersApiService();
