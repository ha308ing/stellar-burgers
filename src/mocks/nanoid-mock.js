// mock nanoid
jest.mock("@reduxjs/toolkit", () => {
  const originalModule = jest.requireActual("@reduxjs/toolkit");

  return {
    __esModule: true,
    ...originalModule,
    nanoid: () => "nanoid",
  };
});
