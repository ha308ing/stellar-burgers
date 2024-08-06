import type { Action } from "@reduxjs/toolkit";
import { combineSlices, createAction } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredients";
import { orderSlice } from "./order";
import { burgerConstructorSlice } from "./burger-constructor";
import { ingredientsTabsSlice } from "./ingredients-tabs";
import { profileSlice } from "./profile";
import { appSlice } from "./app";
import { ordersFeedSlice, ordersHistorySlice } from "./feeds";

type TAppReducer = ReturnType<typeof appReducer>;

export type TRootReducer = ReturnType<typeof rootReducer>;

const appReducer = combineSlices(
  ingredientsSlice,
  orderSlice,
  burgerConstructorSlice,
  ingredientsTabsSlice,
  profileSlice,
  appSlice,
  ordersFeedSlice,
  ordersHistorySlice,
);

const RESET_STORE = "RESET_STORE";
export const resetStore = createAction(RESET_STORE);

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
