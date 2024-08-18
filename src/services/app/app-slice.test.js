import { initialState } from "./initial-state";
import { appSlice } from "./index";
import configureMockStore from "redux-mock-store";
import { appActions } from "./index";
import { thunk } from "redux-thunk";
import { ingredientsActions } from "services/ingredients";
import { profileActions } from "services/profile";
import { STATUSES } from "utils";
import { ingredientsData, email, name, ingredientsFormatted } from "mocks/data";

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
    beforeEach(() => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: async () => ({
            user: {
              email,
              name,
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
            ...ingredientsFormatted,
          },
        },
        {
          type: profileActions.set.type,
          payload: { email, name },
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
