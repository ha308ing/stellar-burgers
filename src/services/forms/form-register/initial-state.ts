import { IUserDataPassword } from "utils";
import { IFormState } from "../types";

export interface IFormRegisterInputs extends IUserDataPassword {}

export interface IFormRegisterState extends IFormState<IFormRegisterInputs> {}

export const initialState: IFormRegisterState = {
  inputs: { name: "", email: "", password: "" },
  status: null,
  message: null,
};
