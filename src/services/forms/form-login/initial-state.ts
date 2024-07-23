import type { IFormState } from "../types";

export interface IFormLoginInputs {
  email: string;
  password: string;
}

export const initialState: IFormLogin = {
  inputs: {
    password: "",
    email: "",
  },
  status: null,
  message: null,
};

export interface IFormLogin extends IFormState<IFormLoginInputs> {}
