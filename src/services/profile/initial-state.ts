import type { TConnectionStatus, IUserDataPassword } from "utils";

export interface IProfileState {
  user: IUserDataPassword | null;
  status: TConnectionStatus | null;
  message: string | null;
  logoutStatus: TConnectionStatus | null;
}

export const initialState: IProfileState = {
  user: null,
  status: null,
  message: null,
  logoutStatus: null,
};
