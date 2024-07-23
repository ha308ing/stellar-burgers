import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "utils";
import { prepareIngredients } from "services/ingredients/utils";

export const getIngredientsThunk = createAsyncThunk(
  "ingredients/get",
  async () => {
    const ingredientsData = await burgersApiController.getIngredients();
    return prepareIngredients(ingredientsData);
  },
);
