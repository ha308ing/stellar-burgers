import type { TObjectValues } from "types";

const BURGERS_API_ROOT = "https://norma.nomoreparties.space/api";
const AUTH_API_ROOT = `${BURGERS_API_ROOT}/auth`;
const PASSWORD_RESET = `${BURGERS_API_ROOT}/password-reset`;

export const API = {
  INGREDIENTS: `${BURGERS_API_ROOT}/ingredients`,
  ORDERS: `${BURGERS_API_ROOT}/orders`,
  AUTH: {
    LOGIN: `${AUTH_API_ROOT}/login`,
    REGISTER: `${AUTH_API_ROOT}/register`,
    LOGOUT: `${AUTH_API_ROOT}/logout`,
    TOKEN: `${AUTH_API_ROOT}/token`,
    USER: `${AUTH_API_ROOT}/user`,
  },
  PASSWORD: {
    RESET: PASSWORD_RESET,
    RENEW: `${PASSWORD_RESET}/reset`,
  },
} as const;

export type TAPI = TObjectValues<typeof API>;
