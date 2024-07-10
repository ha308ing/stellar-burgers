import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IBurgerConstructorState } from "../initial-state";

export const reorderIngredients: CaseReducer<
  IBurgerConstructorState,
  PayloadAction<{
    dragIndex: number;
    hoverIndex: number;
  }>
> = (state, action) => {
  const inner = [...state.burger.inner];
  const { dragIndex, hoverIndex } = action.payload;

  var e = inner[dragIndex];
  inner.splice(dragIndex, 1);
  inner.splice(hoverIndex, 0, e);
  state.burger.inner = [...inner];
};
