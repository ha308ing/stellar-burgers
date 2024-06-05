import { combineReducers } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredients";
import { orderSlice } from "./order";
import { ingredientSlice } from "./ingredient";
import { burgerConstructorSlice } from "./burger-constructor";
import { ingredientsTabsSlice } from "./ingredients-tabs";

export const rootReducer = combineReducers({
  [ingredientsSlice.reducerPath]: ingredientsSlice.reducer,
  [orderSlice.reducerPath]: orderSlice.reducer,
  [ingredientSlice.reducerPath]: ingredientSlice.reducer,
  [burgerConstructorSlice.reducerPath]: burgerConstructorSlice.reducer,
  [ingredientsTabsSlice.reducerPath]: ingredientsTabsSlice.reducer,
});
