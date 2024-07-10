import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../utils/api/burgers-api-controller";
import { burgerConstructorActions } from "../../burger-constructor";
import { IIngredient } from "../../../types";

export const postOrderThunk = createAsyncThunk(
  "order/post",
  async (orderIds: IIngredient["_id"][], thunkApi) => {
    const response = await burgersApiController.postOrder(orderIds);
    thunkApi.dispatch(burgerConstructorActions.clearBurger());
    return response;
  },
);
