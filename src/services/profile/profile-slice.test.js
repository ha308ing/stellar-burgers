import { thunk } from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { initialState } from "./initial-state";
import { profileActions } from ".";
import { email, name } from "mocks/data";

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe("test profile slice", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("getUserInfo should set user info", () => {
    const user = {
      email,
      name,
    };

    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        user,
      }),
    });

    const resultActions = [
      { type: `${profileActions.get.typePrefix}/pending` },
      { type: `${profileActions.get.typePrefix}/fulfilled`, payload: user },
    ];

    expect.assertions(1);

    return store.dispatch(profileActions.get()).then((data) => {
      const actions = store.getActions();

      expect(actions).toMatchObject(resultActions);
    });
  });

  it("getUserInfo should reject if get user failed", () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
    });

    const resultActions = [
      { type: `${profileActions.get.typePrefix}/pending` },
      {
        type: `${profileActions.get.typePrefix}/rejected`,
      },
    ];

    expect.assertions(1);

    return store.dispatch(profileActions.get()).then((data) => {
      const actions = store.getActions();

      expect(actions).toMatchObject(resultActions);
    });
  });
});
