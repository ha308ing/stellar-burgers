import { STATUSES } from "../../../utils";

export const setMessageFulfilled = (state, action) => {
  state.status = STATUSES.FULFILLED;
  state.message = action.payload;
};
