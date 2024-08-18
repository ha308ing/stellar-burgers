import configureMockStore from "redux-mock-store";
import { initialState } from "./initial-state";
import { thunk } from "redux-thunk";
import { orderActions, orderSlice } from ".";
import { burgerConstructorActions } from "services/burger-constructor";

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe("test order slice", () => {
  afterEach(() => {
    store.clearActions();
  });

  it("should set order number and name and clear constructor", () => {
    const orderName = "orderName";
    const orderNumber = 1;

    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ name: orderName, order: { number: orderNumber } }),
    });

    const resultActions = [
      { type: `${orderActions.postOrder.typePrefix}/pending` },
      { type: `${burgerConstructorActions.clearBurger.type}` },
      {
        type: `${orderActions.postOrder.typePrefix}/fulfilled`,
        payload: { orderName, orderNumber },
      },
    ];

    expect.assertions(1);

    return store.dispatch(orderActions.postOrder()).then((data) => {
      const actions = store.getActions();
      expect(actions).toMatchObject(resultActions);
    });
  });

  it("clearOrder should set initial state", () => {
    expect(
      orderSlice.reducer(
        { orderId: 1, orderIdStatus: "FULFILLED", orderName: "orderName" },
        orderActions.clearOrder(),
      ),
    ).toEqual(initialState);
  });

  it("resetOrderIdStatus should reset orderIdStatus", () => {
    expect(
      orderSlice.reducer(
        { ...initialState, orderIdStatus: "REJECTED" },
        orderActions.resetOrderIdStatus(),
      ),
    ).toEqual(initialState);
  });
});
