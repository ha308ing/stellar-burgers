import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../../utils/api/burgers-api-controller";
import { profileActions } from "../../../profile";
import { formProfileActions } from "../../form-profile";

export const submit = createAsyncThunk(
  "formLogin/submit",
  async (formData, thunkApi) => {
    const response = await burgersApiController.login(formData);
    const { password } = formData;
    thunkApi.dispatch(profileActions.set({ ...response, password }));
    thunkApi.dispatch(formProfileActions.set({ ...response, password }));
    thunkApi.dispatch(profileActions.get());
    return response;
  },
);
