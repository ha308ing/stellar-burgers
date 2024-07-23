import type {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  Middleware,
} from "@reduxjs/toolkit";
import { burgersApiController } from "utils";

interface ISocketActions<I, O> {
  connect: ActionCreatorWithoutPayload;
  disconnect: ActionCreatorWithoutPayload;
  send?: ActionCreatorWithPayload<O>;
  onOpen?: ActionCreatorWithoutPayload;
  onClose?: ActionCreatorWithoutPayload;
  onMessage: ActionCreatorWithPayload<I>;
  onError?: ActionCreatorWithPayload<string>;
}

export const createSocketMiddleware =
  <I = unknown, O = unknown>(
    url: string,
    actions: ISocketActions<I, O>,
    withToken = false,
  ): Middleware =>
  (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { connect, disconnect, send, onOpen, onClose, onError, onMessage } =
        actions;

      if (connect.match(action)) {
        let tokenSlug = "";
        if (withToken) {
          const token = burgersApiController.getToken(true);
          tokenSlug = `?token=${token}`;
        }
        socket = new WebSocket(url + tokenSlug);
      }

      if (!socket) return next(action);

      if (send && send.match(action)) {
        const message = JSON.stringify(action.payload);
        socket.send(message);
      }

      socket.onopen = (event) => {
        if (onOpen) dispatch(onOpen());
      };

      socket.onerror = (event) => {
        if (onError) dispatch(onError("не удалось подключиться"));
      };

      socket.onclose = (event) => {
        if (onClose) dispatch(onClose());
      };

      socket.onmessage = (event: MessageEvent<string>) => {
        const data = JSON.parse(event.data);
        const { success, message } = data;
        if (!success && message === "Invalid or missing token") {
          burgersApiController
            .updateToken()
            .then(() => dispatch(connect()))
            .catch(() => dispatch(connect()));
        } else {
          dispatch(onMessage(data));
        }
      };

      if (disconnect.match(action)) {
        socket.close();
        socket = null;
      }

      next(action);
    };
  };
