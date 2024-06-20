import { STATUSES } from "../../../utils";

export const resetInputsFulfilled = (initialState) => (state) => {
  state.status = STATUSES.FULFILLED;
  state.inputs = initialState.inputs;
};
