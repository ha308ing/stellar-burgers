import type { IUserData } from "utils";
import type { IFormState } from "../types";

export interface IFormPasswordForgotInputs {
  email: IUserData["email"];
}

export interface IFormPasswordForgotState
  extends IFormState<IFormPasswordForgotInputs> {}

export const initialState: IFormPasswordForgotState = {
  inputs: {
    email: "",
  },
  status: null,
  message: null,
};
