import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { createSocketMiddleware } from "services/middlewares/create-socket-middleware";
import * as selectors from "./selectors";
import { connect, onMessage, onError } from "services/feeds/actions";

export const ordersHistorySlice = createSlice({
  name: "ordersHistory",
  initialState,
  selectors,
  reducers: {
    connect,
    onError,
    onMessage,
    disconnect: (state) => {
      const { message, status } = initialState;
      state.message = message;
      state.status = status;
    },
  },
});

export const ordersHistoryActions = ordersHistorySlice.actions;

export const ordersHistoryMiddleware = createSocketMiddleware(
  "wss://norma.nomoreparties.space/orders",
  ordersHistoryActions,
  true,
);

export const { selectOrdersHistory } = ordersHistorySlice.selectors;
