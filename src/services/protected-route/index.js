import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
import { checkToken } from "./thunks/check-token";

export const protectedRouteSlice = createSlice({
  name: "protectedRoute",
  initialState,
  selectors: {
    selectIsAuthChecked: (state) => state.isAuthChecked,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) =>
        [checkToken.rejected.type, checkToken.fulfilled.type].includes(
          action.type,
        ),
      (state) => {
        state.isAuthChecked = true;
      },
    );
  },
});

export const protectedRouteActions = {
  ...protectedRouteSlice.actions,
  checkToken,
};
export const { selectIsAuthChecked } = protectedRouteSlice.selectors;
