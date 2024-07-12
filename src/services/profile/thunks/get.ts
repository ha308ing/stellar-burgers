import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";
import { formProfileActions } from "services";

export const get = createAsyncThunk("profile/get", async (_, thunkApi) => {
  const response = await burgersApiController.getUserInfo();
  const { email, name } = response;
  thunkApi.dispatch(formProfileActions.set({ email, name }));
  return response;
});
