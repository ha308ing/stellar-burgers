import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";

export const submit = createAsyncThunk(
  "formPasswordReset/submit",
  burgersApiController.resetPassword,
);
