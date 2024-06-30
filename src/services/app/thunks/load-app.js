import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../utils/api/burgers-api-controller";
import { STATUSES } from "../../../utils";
import { ingredientsActions } from "../../ingredients";
import { profileActions } from "../../profile";
import { formProfileActions } from "../../forms/form-profile";

export const loadApp = createAsyncThunk(
  "profile/loadApp",
  async (_, thunkApi) => {
    const { userInfo, ingredients } = await burgersApiController.loadApp();

    const userInfoStatus = normalizeStatus(userInfo.status);
    const ingredientsStatus = normalizeStatus(ingredients.status);

    if (ingredientsStatus === STATUSES.REJECTED) {
      thunkApi.dispatch(
        ingredientsActions.set({
          status: ingredientsStatus,
          ingredients: [],
        }),
      );
    } else if (ingredientsStatus === STATUSES.FULFILLED) {
      thunkApi.dispatch(
        ingredientsActions.set({
          status: ingredientsStatus,
          ingredients: ingredients.value,
        }),
      );
    }

    if (userInfoStatus === STATUSES.REJECTED) {
      thunkApi.dispatch(profileActions.setMessage(userInfo.reason.message));
    } else if (userInfoStatus === STATUSES.FULFILLED) {
      const { email, name } = userInfo.value;

      thunkApi.dispatch(profileActions.set({ email, name }));
      thunkApi.dispatch(formProfileActions.set({ email, name }));
    }
  },
);

function normalizeStatus(status) {
  let normalStatus = status;

  switch (status) {
    case "rejected":
      normalStatus = STATUSES.REJECTED;
      break;
    case "fulfilled":
      normalStatus = STATUSES.FULFILLED;
      break;
    default:
      normalStatus = status;
  }

  return normalStatus;
}
