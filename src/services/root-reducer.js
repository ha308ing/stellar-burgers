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
});

export const RESET_STORE = "RESET_STORE";

export const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    const ingredients = state[ingredientsSlice.reducerPath];
    const { isAuthChecked } = state[profileSlice.reducerPath];
    return appReducer(
      {
        [ingredientsSlice.reducerPath]: ingredients,
        [profileSlice.reducerPath]: {
          ...profileSlice.getInitialState(),
          isAuthChecked,
        },
      },
      action,
    );
  }
  return appReducer(state, action);
};
