// wrapper of dispatch and action
// to not to repeat event.target in every form

export const dispatchInputAction = (dispatch, action) => (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  dispatch(action([name, value]));
};

export const dispatchFormAction = (dispatch, action) => (args) => (event) => {
  event.preventDefault();
  dispatch(action(args));
};
