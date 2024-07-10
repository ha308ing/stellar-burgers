import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import * as reducers from "./reducers";
import * as selectors from "./selectors";
import { postOrderThunk } from "./thunks";
import { STATUSES } from "../../utils";

export const orderSlice = createSlice({
  name: "order",
  initialState,
  selectors,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(postOrderThunk.rejected, (state) => {
        state.orderId = initialState.orderId;
        state.orderIdStatus = STATUSES.REJECTED;
      })
      .addCase(postOrderThunk.pending, (state) => {
        state.orderIdStatus = STATUSES.PENDING;
        state.orderId = initialState.orderId;
        state.orderName = initialState.orderName;
      })
      .addCase(postOrderThunk.fulfilled, (state, { payload }) => {
        const { orderName, orderNumber } = payload;
        state.orderIdStatus = STATUSES.FULFILLED;
        state.orderId = orderNumber;
        state.orderName = orderName;
      });
  },
});

export const orderActions = {
  ...orderSlice.actions,
  postOrder: postOrderThunk,
};

export const { selectOrderInfo } = orderSlice.selectors;
