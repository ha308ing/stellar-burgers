import { Action, combineSlices } from "@reduxjs/toolkit";
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

type TAppReducer = ReturnType<typeof appReducer>;

export type TRootReducer = ReturnType<typeof rootReducer>;

const appReducer = combineSlices(
  ingredientsSlice,
  orderSlice,
  burgerConstructorSlice,
  ingredientsTabsSlice,
  formRegisterSlice,
  formLoginSlice,
  profileSlice,
  formProfileSlice,
  formPasswordForgotSlice,
  formPasswordResetSlice,
  appSlice,
);

export const RESET_STORE = "RESET_STORE";

export const rootReducer = (state: TAppReducer, action: Action) => {
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
