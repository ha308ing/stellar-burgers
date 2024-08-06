import { STATUSES } from "utils";
import { ordersFeedActions, ordersFeedSlice } from ".";
import { initialState } from "./initial-state";
import {
  ordersData as orders,
  ordersByNumber,
  ordersNumbers,
} from "mocks/data";

describe("test orders feed", () => {
  it("should save orders as array of order numbers and as object with order numbers as keys", () => {
    const message = {
      success: true,
      orders,
      total: 47738,
      totalToday: 126,
    };

    const result = {
      ...initialState,
      success: true,
      total: 47738,
      totalToday: 126,
      ordersNumbers,
      status: STATUSES.FULFILLED,
      ordersByNumber,
    };

    expect(
      ordersFeedSlice.reducer(undefined, ordersFeedActions.onMessage(message)),
    ).toStrictEqual(result);
  });
});
