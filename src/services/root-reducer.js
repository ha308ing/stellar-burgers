import { combineReducers } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredients";
import { orderSlice } from "./order";
import { ingredientSlice } from "./ingredient";
import { burgerConstructorSlice } from "./burger-constructor";

export const rootReducer = combineReducers({
  [ingredientsSlice.reducerPath]: ingredientsSlice.reducer,
  [orderSlice.reducerPath]: orderSlice.reducer,
  [ingredientSlice.reducerPath]: ingredientSlice.reducer,
  [burgerConstructorSlice.reducerPath]: burgerConstructorSlice.reducer,
});
