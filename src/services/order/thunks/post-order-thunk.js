import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../utils/api/burgers-api-controller";

export const postOrderThunk = createAsyncThunk(
  "order/post",
  burgersApiController.postOrder,
);
