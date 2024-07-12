import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils/api/burgers-api-controller";

export const logout = createAsyncThunk(
  "profile/logout",
  burgersApiController.logout,
);
