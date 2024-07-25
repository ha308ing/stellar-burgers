import type { IProfileState } from "../initial-state";

export const selectMessage = (state: IProfileState) => state.message;
