export const change = (state, action) => {
  const [name, value] = action.payload;
  state.inputs[name] = value;
};
