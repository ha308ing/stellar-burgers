import { ingredientsActions } from ".";
import { initialState } from "./initial-state";
import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import {
  ingredientsData as ingredients,
  ingredientsFormatted,
} from "mocks/data";

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe("test ingredients slice", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        success: true,
        data: ingredients,
      }),
    });
  });

  afterEach(() => {
    store.clearActions();
  });

  it("should save ingredients as array of ids and object with ingredients ids as keys", () => {
    const resultActions = [
      { type: `${ingredientsActions.getIngredients.typePrefix}/pending` },
      {
        type: `${ingredientsActions.getIngredients.typePrefix}/fulfilled`,
        payload: ingredientsFormatted,
      },
    ];

    expect.assertions(1);

    return store.dispatch(ingredientsActions.getIngredients()).then((data) => {
      const actions = store.getActions();
      expect(actions).toMatchObject(resultActions);
    });
  });

  it("should reset ingredients if failed to fetch ingredients", () => {
    jest.spyOn(global, "fetch").mockRejectedValue({
      ok: true,
      json: async () => ({
        success: false,
        message: "failed to get ingredients",
      }),
    });

    const resultActions = [
      { type: `${ingredientsActions.getIngredients.typePrefix}/pending` },
      {
        type: `${ingredientsActions.getIngredients.typePrefix}/rejected`,
      },
    ];

    expect.assertions(1);

    return store.dispatch(ingredientsActions.getIngredients()).then((data) => {
      const actions = store.getActions();
      expect(actions).toMatchObject(resultActions);
    });
  });
});
