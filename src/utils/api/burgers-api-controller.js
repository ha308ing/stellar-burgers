import { burgersApiService } from "./burgers-api-service";

export const burgersApiController = {
  getIngredients: (stateSetter) => {
    const { abortController, requestPromise } =
      burgersApiService.getIngredients();

    requestPromise
      .then(({ data }) => {
        stateSetter({ status: "ok", data });
      })
      .catch((_) => {
        stateSetter({ status: "error", data: [] });
      });

    return abortController;
  },
};
