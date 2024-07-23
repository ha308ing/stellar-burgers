import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";

export const submit = createAsyncThunk(
  "formPasswordForgot/submit",
  burgersApiController.requestPasswordResetCode,
);
