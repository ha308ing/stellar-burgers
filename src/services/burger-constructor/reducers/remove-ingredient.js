export const removeIngredient = (state, action) => {
  const internalId = action.payload;
  const isBun = state.order?.bun && state.burger.bun.internalId === internalId;
  if (isBun) {
    state.burger.bun = null;
  } else {
    state.burger.inner = [
      ...state.burger.inner.filter(
        (ingredient) => ingredient.internalId !== internalId,
      ),
    ];
  }
};
