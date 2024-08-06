import { initialState } from "./initial-state";
import { burgerConstructorSlice, burgerConstructorActions } from "./index";

let currentState = initialState;

describe("test burger constructor slice", () => {
  beforeEach(() => {
    currentState = {
      ...initialState,
      burger: {
        bun: { type: "bun", internalId: "bun" },
        inner: [
          { type: "main", internalId: "id1" },
          { type: "sauce", internalId: "id2" },
        ],
      },
    };
  });

  /* add ingredient */
  describe("test addIngredient", () => {
    describe("test add bun ingredient", () => {
      it("should add internalId to props", () => {
        const ingredient = {
          _id: "643d69a5c3f7b9001cfa093c",
          name: "Краторная булка N-200i",
          type: "bun",
        };

        expect(
          burgerConstructorSlice.reducer(
            undefined,
            burgerConstructorActions.addIngredient(ingredient),
          ),
        ).toMatchObject({
          ...initialState,
          burger: { bun: { ...ingredient, internalId: "nanoid" } },
        });
      });

      it("should replace current bun", () => {
        const initialStateWithBun = {
          ...initialState,
          burger: {
            bun: {
              _id: "643d69a5c3f7b9001cfa093c",
              name: "Краторная булка N-200i",
              type: "bun",
            },
            inner: [],
          },
        };

        const newBun = {
          _id: "newBun",
          type: "bun",
        };

        expect(
          burgerConstructorSlice.reducer(
            initialStateWithBun,
            burgerConstructorActions.addIngredient(newBun),
          ),
        ).toStrictEqual({
          ...initialStateWithBun,
          burger: {
            ...initialStateWithBun.burger,
            bun: { ...newBun, internalId: "nanoid" },
          },
        });
      });
    });
    describe("test not bun ingredient", () => {
      it("should add to burger.inner array", () => {
        const ingredient = {
          _id: "643d69a5c3f7b9001cfa0942",
          type: "sauce",
        };

        expect(
          burgerConstructorSlice.reducer(
            undefined,
            burgerConstructorActions.addIngredient(ingredient),
          ),
        ).toMatchObject({
          ...initialState,
          burger: { inner: [{ ...ingredient, internalId: "nanoid" }] },
        });
      });

      it("should add burger.inner array with present ingredients", () => {
        const currentIngredient = {
          _id: "643d69a5c3f7b9001cfa0942",
          type: "sauce",
        };

        const initialStateWithIngredient = {
          ...initialState,
          burger: {
            ...initialState.burger,
            inner: [currentIngredient],
          },
        };

        const newIngredient = {
          _id: "643d69a5c3f7b9001cfa0943",
          type: "sauce",
        };

        expect(
          burgerConstructorSlice.reducer(
            initialStateWithIngredient,
            burgerConstructorActions.addIngredient(newIngredient),
          ),
        ).toEqual({
          ...initialStateWithIngredient,
          burger: {
            ...initialStateWithIngredient.burger,
            inner: [
              currentIngredient,
              { ...newIngredient, internalId: "nanoid" },
            ],
          },
        });
      });
    });
  });

  /* clear burgers */
  it("clearBurger should reset burger state", () => {
    expect(
      burgerConstructorSlice.reducer(
        currentState,
        burgerConstructorActions.clearBurger(),
      ),
    ).toBe(initialState);
  });

  /* remove ingredient */
  describe("test removeIngredient", () => {
    it("should remove bun", () => {
      expect(
        burgerConstructorSlice.reducer(
          currentState,
          burgerConstructorActions.removeIngredient("bun"),
        ),
      ).toStrictEqual({
        ...currentState,
        burger: {
          ...currentState.burger,
          bun: null,
        },
      });
    });

    it("should remove ingredient", () => {
      expect(
        burgerConstructorSlice.reducer(
          currentState,
          burgerConstructorActions.removeIngredient("id2"),
        ),
      ).toStrictEqual({
        ...currentState,
        burger: {
          ...currentState.burger,
          inner: [currentState.burger.inner[0]],
        },
      });
    });

    it("should not remove not ingredient", () => {
      expect(
        burgerConstructorSlice.reducer(
          currentState,
          burgerConstructorActions.removeIngredient("id3"),
        ),
      ).toStrictEqual(currentState);
    });
  });

  /* reorder ingredients */
  it("reorderIngredients should reorder ingredients", () => {
    const dragIndex = 0;
    const hoverIndex = 1;

    let dragIngredient = currentState.burger.inner[dragIndex];
    let dropIngredient = currentState.burger.inner[hoverIndex];

    expect(
      burgerConstructorSlice.reducer(
        currentState,
        burgerConstructorActions.reorderIngredients({
          dragIndex,
          hoverIndex,
        }),
      ),
    ).toStrictEqual({
      ...currentState,
      burger: {
        ...currentState.burger,
        inner: [dropIngredient, dragIngredient],
      },
    });
  });
});
