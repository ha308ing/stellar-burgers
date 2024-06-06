export const reorderIngredients = (state, action) => {
  const inner = [...state.burger.inner];
  const { dragIndex, hoverIndex } = action.payload;

  var e = inner[dragIndex];
  inner.splice(dragIndex, 1);
  inner.splice(hoverIndex, 0, e);
  state.burger.inner = [...inner];
};
