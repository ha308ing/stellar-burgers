import { ingredientsActions } from ".";
import { initialState } from "./initial-state";
import configureMockStore from "redux-mock-store";
import { thunk } from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

const ingredients = [
  {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa093e",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
  },
];

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
        payload: {
          ingredients: {
            [ingredients[0]._id]: ingredients[0],
            [ingredients[1]._id]: ingredients[1],
            [ingredients[2]._id]: ingredients[2],
          },
          ingredientsIds: [
            ingredients[0]._id,
            ingredients[1]._id,
            ingredients[2]._id,
          ],
        },
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
