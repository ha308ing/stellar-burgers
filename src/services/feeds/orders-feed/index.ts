import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { createSocketMiddleware } from "services/middlewares/create-socket-middleware";
import * as selectors from "./selectors";
import { connect, onMessage, onError } from "services/feeds/actions";

export const ordersFeedSlice = createSlice({
  name: "ordersFeed",
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

export const ordersFeedActions = ordersFeedSlice.actions;

export const { selectOrdersFeed } = ordersFeedSlice.selectors;

export const ordersFeedMiddleWare = createSocketMiddleware(
  "wss://norma.nomoreparties.space/orders/all",
  ordersFeedActions,
);
