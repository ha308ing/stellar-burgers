import { STATUSES } from "../../../utils";

export const setStatusPending = (state) => {
  state.status = STATUSES.PENDING;
};
