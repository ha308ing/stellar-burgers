import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils/api/burgers-api-controller";
import { profileActions } from "services/profile";
import { formProfileActions } from "services/forms/form-profile";
import { IFormRegisterInputs } from "../initial-state";

export const submit = createAsyncThunk(
  "formRegister/submit",
  async (formData: IFormRegisterInputs, thunkApi) => {
    const response = await burgersApiController.register(formData);
    const { password } = formData;
    thunkApi.dispatch(profileActions.set({ ...response, password }));
    thunkApi.dispatch(formProfileActions.set({ ...response, password }));
    thunkApi.dispatch(profileActions.get());
    return response;
  },
);
