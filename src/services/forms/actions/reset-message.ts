import type { IFormState } from "../types";

export const resetMessage = <T extends IFormState>(state: T) => {
  state.status = null;
  state.message = null;
};
