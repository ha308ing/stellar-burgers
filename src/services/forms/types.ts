import type { TConnectionStatus } from "utils";

export interface IFormState<T = Record<string, unknown>> {
  status: TConnectionStatus | null;
  message: string | null;
  inputs: TFormInputs<T>;
}

export type TFormInputs<T = Record<string, unknown>> = {
  [name in keyof T]: T[name];
};
