import { TConnectionStatus } from "utils";

export interface ILoadAppState {
  loadingStatus: TConnectionStatus | null;
  isAuthChecked: boolean;
  isMobile: boolean | null;
}

export const initialState: ILoadAppState = {
  loadingStatus: null,
  isAuthChecked: false,
  isMobile: null,
};
