import type { TConnectionStatus } from "utils";
export type { IFormLoginInputs } from "./form-login/initial-state";
export type { IFormPasswordForgotInputs } from "./form-password-forgot/initial-state";
export type { IFormPasswordResetInputs } from "./form-password-reset/initial-state";
export type { IFormRegisterInputs } from "./form-register/initial-state";

export interface IFormState<T = Record<string, unknown>> {
  status: TConnectionStatus | null;
  message: string | null;
  inputs: TFormInputs<T>;
}

export type TFormInputs<T = Record<string, unknown>> = {
  [name in keyof T]: T[name];
};
