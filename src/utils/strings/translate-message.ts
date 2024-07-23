import type { TStringsTranslate, TStringsTranslateKeys } from "./strings";
import { STRINGS_RU } from "./strings-ru";

export const translateMessage = (
  message: string,
  translations: TStringsTranslate = STRINGS_RU,
) =>
  isTranslatableString(message, translations) ? translations[message] : message;

function isTranslatableString(
  string: string,
  translations: TStringsTranslate,
): string is TStringsTranslateKeys {
  return string in translations;
}
