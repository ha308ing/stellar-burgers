import { combineReducers } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredients";
import { orderSlice } from "./order";
import { burgerConstructorSlice } from "./burger-constructor";
import { ingredientsTabsSlice } from "./ingredients-tabs";
import {
  formLoginSlice,
  formRegisterSlice,
  formProfileSlice,
  formPasswordForgotSlice,
  formPasswordResetSlice,
} from "./forms";
import { profileSlice } from "./profile";
import { appSlice } from "./app";

const appReducer = combineReducers({
  [ingredientsSlice.reducerPath]: ingredientsSlice.reducer,
  [orderSlice.reducerPath]: orderSlice.reducer,
  [burgerConstructorSlice.reducerPath]: burgerConstructorSlice.reducer,
  [ingredientsTabsSlice.reducerPath]: ingredientsTabsSlice.reducer,
  [formRegisterSlice.reducerPath]: formRegisterSlice.reducer,
  [formLoginSlice.reducerPath]: formLoginSlice.reducer,
  [profileSlice.reducerPath]: profileSlice.reducer,
  [formProfileSlice.reducerPath]: formProfileSlice.reducer,
  [formPasswordForgotSlice.reducerPath]: formPasswordForgotSlice.reducer,
  [formPasswordResetSlice.reducerPath]: formPasswordResetSlice.reducer,
  [appSlice.reducerPath]: appSlice.reducer,
});

export const RESET_STORE = "RESET_STORE";

export const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    const ingredients = state[ingredientsSlice.reducerPath];
    const app = state[appSlice.reducerPath];
    return appReducer(
      {
        [ingredientsSlice.reducerPath]: ingredients,
        [appSlice.reducerPath]: app,
      },
      action,
    );
  }
  return appReducer(state, action);
};
