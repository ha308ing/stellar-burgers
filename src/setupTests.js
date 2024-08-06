/* eslint-disable filename-rules/match */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "mocks/fetch-mock";
import "mocks/localstorage-mock";
import "mocks/nanoid-mock";

afterEach(() => {
  jest.restoreAllMocks();
});
