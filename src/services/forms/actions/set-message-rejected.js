import { STATUSES } from "../../../utils";

export const setMessageRejected = (state, action) => {
  state.status = STATUSES.REJECTED;
  state.message = action.error.message;
};
