import type { Reducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { TRootReducer } from "./services";
import { rootReducer } from "./services";

export const store = configureStore({
  reducer: rootReducer as Reducer<TRootReducer>,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
