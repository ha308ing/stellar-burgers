import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";

export const getIngredientsThunk = createAsyncThunk(
  "ingredients/get",
  burgersApiController.getIngredients,
);
