import { createDraftSafeSelector } from "@reduxjs/toolkit";
import type { IIngredientsState } from "services/ingredients/initial-state";
import { selectIngredientsIds } from "./select-ingredients";
import { STATUSES } from "utils";

const selectStatus = (state: IIngredientsState) => state.status;

export const selectIngredientsStatus = createDraftSafeSelector(
  [selectStatus, selectIngredientsIds],
  (status, ingredientsIds) => {
    const isPending = status == null || status === STATUSES.PENDING;
    const isRejected = status === STATUSES.REJECTED;
    const isFulfilled = status === STATUSES.FULFILLED;
    const isNoIngredients =
      isRejected || (isFulfilled && ingredientsIds.length === 0);

    return {
      isPending,
      isRejected,
      isFulfilled,
      isNoIngredients,
    };
  },
);
