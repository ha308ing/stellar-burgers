import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../utils/api/burgers-api-controller";

export const checkToken = createAsyncThunk(
  "protectedRoute/updateToken",
  burgersApiController.checkToken,
);
