import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../../utils/api/burgers-api-controller";
import { profileActions } from "../../../profile";

export const submit = createAsyncThunk(
  "formProfile/submit",
  async (formData, thunkApi) => {
    const { email, name, password } = formData;
    await burgersApiController.updateUserInfo(
      password.length === 0 ? { email, name } : formData,
    );
    thunkApi.dispatch(profileActions.get());
    thunkApi.dispatch(profileActions.set({ email, name, password }));
    return formData;
  },
);
