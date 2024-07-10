import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../utils/api/burgers-api-controller";

export const getIngredientsThunk = createAsyncThunk(
  "ingredients/get",
  burgersApiController.getIngredients,
);
