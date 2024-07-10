import { STATUSES } from "../../../utils";
import { IFormState } from "../types";

export const setStatusPending = <T extends IFormState>(state: T) => {
  state.status = STATUSES.PENDING;
};
