import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  selectors: {
    selectIngredient(state) {
      return state.ingredient;
    },
  },
  reducers: {
    setIngredient(state, action) {
      state.ingredient = action.payload;
    },
    resetIngredient(state) {
      state.ingredient = null;
    },
  },
});

export const ingredientActions = { ...ingredientSlice.actions };

export const { selectIngredient } = ingredientSlice.selectors;
