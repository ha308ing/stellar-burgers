import { IUserDataPassword } from "utils/api/types";
import { TConnectionStatus } from "utils";

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
