import { burgersApiService } from "./burgers-api-service";

class BurgersApiController {
  getIngredientsToState = (stateSetter) => {
    const { abortController, requestPromise } =
      burgersApiService.getIngredients();

    requestPromise
      .then(({ data }) => {
        stateSetter({ status: "ok", data });
      })
      .catch((error) => {
        stateSetter({ status: "error", data: [] });
      });

    return abortController;
  };
}

export const burgersApiController = new BurgersApiController();
