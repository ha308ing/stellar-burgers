import { IUserDataPassword } from "utils/api/types";
import { IFormState } from "../types";

export interface IFormPasswordResetInputs {
  password: IUserDataPassword["password"];
  token: string;
}

export interface IFormPasswordResetState
  extends IFormState<IFormPasswordResetInputs> {}

export const initialState: IFormPasswordResetState = {
  inputs: {
    password: "",
    token: "",
  },
  status: null,
  message: null,
};
