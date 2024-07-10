import { configureStore, Reducer } from "@reduxjs/toolkit";
import { rootReducer, TRootReducer } from "./services/root-reducer";

export const store = configureStore({
  reducer: rootReducer as Reducer<TRootReducer>,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
