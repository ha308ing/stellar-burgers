import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";
import { profileActions, formProfileActions } from "services";
import type { IFormLoginInputs } from "../initial-state";

export const submit = createAsyncThunk(
  "formLogin/submit",
  async (formData: IFormLoginInputs, thunkApi) => {
    const response = await burgersApiController.login(formData);
    const { password } = formData;
    thunkApi.dispatch(profileActions.set({ ...response, password }));
    thunkApi.dispatch(formProfileActions.set({ ...response, password }));
    thunkApi.dispatch(profileActions.get());
    return response;
  },
);
