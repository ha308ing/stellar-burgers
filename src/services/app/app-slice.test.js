import { initialState } from "./initial-state";
import { appSlice } from "./index";
import configureMockStore from "redux-mock-store";
import { appActions } from "./index";
import { thunk } from "redux-thunk";
import { ingredientsActions } from "services/ingredients";
import { profileActions } from "services/profile";
import { STATUSES } from "utils";

const mockStore = configureMockStore([thunk]);
let store = mockStore(initialState);

describe("test app slice", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("should return initial state with no input", () => {
    expect(appSlice.reducer(undefined, {})).toEqual(initialState);
  });

  it("should set isMobile", () => {
    expect(
      appSlice.reducer(undefined, { type: appActions.setIsMobile.type }),
    ).toEqual({
      ...initialState,
      isMobile: true,
    });
  });

  describe("test loadApp thunk", () => {
    const ingredientsData = [
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
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
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
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        __v: 0,
      },
    ];

    beforeEach(() => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: async () => ({
            user: {
              email: "kk@kk.kk",
              name: "kk",
            },
            data: ingredientsData,
          }),
        }),
      );
    });

    it("should call fetch 2 times for ingredients and user", () => {
      expect.assertions(1);

      return store.dispatch(appActions.load()).then((data) => {
        expect(fetch).toBeCalledTimes(2);
      });
    });

    it("should set user and formatted ingredients", () => {
      const expectedActions = [
        {
          type: `${appActions.load.typePrefix}/pending`,
        },
        {
          type: ingredientsActions.set.type,
          payload: {
            status: STATUSES.FULFILLED,
            ingredients: {
              "643d69a5c3f7b9001cfa093c": ingredientsData[0],
              "643d69a5c3f7b9001cfa0941": ingredientsData[1],
              "643d69a5c3f7b9001cfa093e": ingredientsData[2],
            },
            ingredientsIds: [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa093e",
            ],
          },
        },
        {
          type: profileActions.set.type,
          payload: { email: "kk@kk.kk", name: "kk" },
        },
        {
          type: `${appActions.load.typePrefix}/fulfilled`,
        },
      ];

      expect.assertions(2);

      return store.dispatch(appActions.load()).then((data) => {
        const actions = store.getActions();
        expect(fetch).toBeCalledTimes(2);
        expect(actions).toMatchObject(expectedActions);
      });
    });

    it("should set error message in profile and empty ingredinets if request has failed", () => {
      const message = "failed request";

      jest.spyOn(global, "fetch").mockResolvedValue({
        ok: false,
        json: async () => ({
          message,
        }),
      });

      const expectedActions = [
        {
          type: `${appActions.load.typePrefix}/pending`,
        },
        {
          type: ingredientsActions.set.type,
          payload: {
            status: STATUSES.REJECTED,
            ingredients: {},
            ingredientsIds: [],
          },
        },
        {
          type: profileActions.setMessage.type,
          payload: message,
        },
        {
          type: `${appActions.load.typePrefix}/fulfilled`,
        },
      ];

      return store.dispatch(appActions.load()).then((data) => {
        const actions = store.getActions();
        expect(actions).toMatchObject(expectedActions);
      });
    });
  });
});
