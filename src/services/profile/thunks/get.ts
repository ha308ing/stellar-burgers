import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";

export const get = createAsyncThunk(
  "profile/get",
  burgersApiController.getUserInfo,
);
