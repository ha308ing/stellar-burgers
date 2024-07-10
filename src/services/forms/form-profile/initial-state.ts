import { IUserDataPassword } from "../../../utils/api/types";
import { IFormState } from "../types";

export interface IFormProfileInputs extends IUserDataPassword {}

export interface IFormProfileState extends IFormState<IFormProfileInputs> {}

export const initialState: IFormProfileState = {
  inputs: { name: "", email: "", password: "" },
  status: null,
  message: null,
};
