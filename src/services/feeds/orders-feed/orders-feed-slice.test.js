import { STATUSES } from "utils";
import { ordersFeedActions, ordersFeedSlice } from ".";
import { initialState } from "./initial-state";

describe("test orders feed", () => {
  it("should save orders as array of order numbers and as object with order numbers as keys", () => {
    const orders = [
      {
        _id: "66ac4f92119d45001b4fd017",
        ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093e"],
        status: "done",
        name: "Флюоресцентный люминесцентный бургер",
        createdAt: "2024-08-02T03:16:34.961Z",
        updatedAt: "2024-08-02T03:16:35.431Z",
        number: 48112,
      },
      {
        _id: "66ac4f5a119d45001b4fd016",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093f",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa0940",
        ],
        status: "done",
        name: "Краторный люминесцентный бессмертный био-марсианский метеоритный бургер",
        createdAt: "2024-08-02T03:15:38.912Z",
        updatedAt: "2024-08-02T03:15:39.420Z",
        number: 48111,
      },
      {
        _id: "66ac3dfa119d45001b4fd005",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный био-марсианский бургер",
        createdAt: "2024-08-02T02:01:30.383Z",
        updatedAt: "2024-08-02T02:01:30.897Z",
        number: 48110,
      },
    ];
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
      ordersNumbers: [48112, 48111, 48110],
      status: STATUSES.FULFILLED,
      ordersByNumber: {
        48112: { ...orders[0], statusLocal: "выполнен" },
        48111: { ...orders[1], statusLocal: "выполнен" },
        48110: { ...orders[2], statusLocal: "выполнен" },
      },
    };

    expect(
      ordersFeedSlice.reducer(undefined, ordersFeedActions.onMessage(message)),
    ).toStrictEqual(result);
  });
});
