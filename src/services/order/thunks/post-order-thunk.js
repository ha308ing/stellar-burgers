import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiService } from "../../../utils/api/burgers-api-service";

export const postOrderThunk = createAsyncThunk("order/post", (orderIds) => {
  const { requestPromise } = burgersApiService.postOrder(
    JSON.stringify({ ingredients: orderIds }),
  );
  return requestPromise;
});
