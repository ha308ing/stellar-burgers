import { createAsyncThunk } from "@reduxjs/toolkit";
import { STATUSES, burgersApiController } from "utils";
import { ingredientsActions, profileActions } from "services";

export const loadApp = createAsyncThunk("app/loadApp", async (_, thunkApi) => {
  const { userInfo, ingredients } = await burgersApiController.loadApp();

  if (isRejectedPromise(ingredients)) {
    thunkApi.dispatch(
      ingredientsActions.set({
        status: STATUSES.REJECTED,
        ingredients: [],
      }),
    );
  } else if (isFulfilledPromise(ingredients)) {
    thunkApi.dispatch(
      ingredientsActions.set({
        status: STATUSES.FULFILLED,
        ingredients: ingredients.value,
      }),
    );
  }

  if (isRejectedPromise(userInfo)) {
    thunkApi.dispatch(profileActions.setMessage(userInfo.reason.message));
  } else if (isFulfilledPromise(userInfo)) {
    const { email, name } = userInfo.value;

    thunkApi.dispatch(profileActions.set({ email, name }));
  }
});

function isRejectedPromise(
  promiseResult: PromiseSettledResult<unknown>,
): promiseResult is PromiseRejectedResult {
  return promiseResult.status === "rejected";
}

type GetParams<T> = T extends PromiseSettledResult<infer P> ? P : never;

function isFulfilledPromise(
  promiseResult: PromiseSettledResult<unknown>,
): promiseResult is PromiseFulfilledResult<GetParams<typeof promiseResult>> {
  return promiseResult.status === "fulfilled";
}
