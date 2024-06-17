import { STATUSES } from "../../../utils";

export const setMessageFullfilled = (state, action) => {
  state.status = STATUSES.FULFILLED;
  state.message = action.payload;
};
