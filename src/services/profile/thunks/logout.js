import { createAsyncThunk } from "@reduxjs/toolkit";
import { burgersApiController } from "../../../utils/api/burgers-api-controller";

export const logout = createAsyncThunk("profile/logout", async () => {
  const logoutStatus = await burgersApiController.logout();
  return logoutStatus;
});
