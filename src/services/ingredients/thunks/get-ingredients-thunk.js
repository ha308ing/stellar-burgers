import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiService } from "../../../utils/api/burgers-api-service";

export const getIngredientsThunk = createAsyncThunk(
  "ingredients/get",
  burgersApiService.fetchIngredients,
);
