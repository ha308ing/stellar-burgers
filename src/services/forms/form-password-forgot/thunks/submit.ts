import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils/api/burgers-api-controller";

export const submit = createAsyncThunk(
  "formPasswordForgot/submit",
  burgersApiController.requestPasswordResetCode,
);
