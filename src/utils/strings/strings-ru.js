import { STRINGS } from "./strings";

const failDefault = "не удалось выполнить запрос";

export const STRINGS_RU = {
  [STRINGS.REQUEST_FAILED]: failDefault,
  [STRINGS.FAILED_FETCH]: failDefault,
  [STRINGS.REGISTER_FIELDS_REQUIRED]:
    "для регистрации нужны: имя, email и пароль",
  [STRINGS.LOGIN_FIELDS_WRONG]: "неверный email или пароль",
  [STRINGS.USER_EXISTS]: "пользователь уже зарегистрирован",
  [STRINGS.USER_UNAUTHORIZED]: "для доступа нужно авторизоваться",
  [STRINGS.PASSWORD_RENEW_FIELDS_WRONG]: "введены неверные данные",
  [STRINGS.NETWORK_ERROR]: "ошибка сети",
  [STRINGS.PASSWORD_RESET_INCORRECT_TOKEN]: "неверный код",
  [STRINGS.TOO_LONG]: "долго ждём, что-то не то",
};
