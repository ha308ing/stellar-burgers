import type { TObjectValues } from "types";

export const STRINGS = {
  REQUEST_FAILED: "Failed to execute request",
  REGISTER_FIELDS_REQUIRED: "Email, password and name are required fields",
  LOGIN_FIELDS_WRONG: "email or password are incorrect",
  USER_EXISTS: "User already exists",
  USER_UNAUTHORIZED: "You should be authorised",
  PASSWORD_RENEW_FIELDS_WRONG: "Invalid credentials provided",
  JWT_EXPIRED: "jwt expired",
  JWT_INVALID: "Token is invalid",
  NETWORK_ERROR: "NetworkError when attempting to fetch resource.",
  FAILED_FETCH: "Failed to fetch",
  PASSWORD_RESET_INCORRECT_TOKEN: "Incorrect reset token",
  TOO_LONG: "too long",
} as const;

export type TStrings = TObjectValues<typeof STRINGS>;

type TStingsNoTranslate =
  | typeof STRINGS.JWT_EXPIRED
  | typeof STRINGS.JWT_INVALID;

export type TStringsTranslateKeys = Exclude<TStrings, TStingsNoTranslate>;

export type TStringsTranslate = Record<TStringsTranslateKeys, string>;
