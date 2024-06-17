import { STATUSES } from "../../../utils";

export const resetInputsFullfilled = (initialState) => (state) => {
  state.status = STATUSES.FULFILLED;
  state.inputs = initialState.inputs;
};
