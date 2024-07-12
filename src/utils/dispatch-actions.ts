// wrapper of dispatch and action
// to not to repeat event.target in every form

import type { ChangeEvent, FormEvent } from "react";
import type { AppDispatch } from "store";
import type { ActionCreatorWithPayload, AsyncThunk } from "@reduxjs/toolkit";
import type { IFormState } from "services";
import type { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export const dispatchInputAction =
  <T extends IFormState>(
    dispatch: AppDispatch,
    action: ActionCreatorWithPayload<[keyof T["inputs"], string]>,
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    dispatch(action([name, value]));
  };

export const dispatchFormAction =
  <T extends IFormState, S = T extends IFormState<infer P> ? P : unknown>(
    dispatch: AppDispatch,
    action: AsyncThunk<any, S, AsyncThunkConfig>,
  ) =>
  (args: S) =>
  (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(action(args));
  };
