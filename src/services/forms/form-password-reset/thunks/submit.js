import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../../utils/api/burgers-api-controller";

export const submit = createAsyncThunk(
  "formPasswordReset/submit",
  burgersApiController.resetPassword,
);
