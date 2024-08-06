import { translateMessage } from ".//translate-message";
import { STRINGS } from "./strings";
import { STRINGS_RU } from "./strings-ru";

describe("test translate strings", () => {
  it("should translate string", () => {
    const result = translateMessage(STRINGS.LOGIN_FIELDS_WRONG);
    const translatedString = STRINGS_RU[STRINGS.LOGIN_FIELDS_WRONG];

    expect(result).toBe(translatedString);
  });

  it("unnown string should be left as is", () => {
    const result = translateMessage("untranslatable");

    expect(result).toBe(result);
  });
});
