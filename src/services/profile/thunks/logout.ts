import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";

export const logout = createAsyncThunk(
  "profile/logout",
  burgersApiController.logout,
);
