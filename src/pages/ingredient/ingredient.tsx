import { useAppSelector } from "hooks";
import { useParams } from "react-router-dom";
import { selectIngredient, selectIngredientsStatus } from "services";
import { LayoutMain, IngredientDetails } from "components";
import { ModalPending, ModalRejected } from "./components";
import type { FC } from "react";

export const IngredientPage: FC = () => {
  const { ingredientId } = useParams();
  const ingredient = useAppSelector(selectIngredient(ingredientId));
  const { isFulfilled, isPending } = useAppSelector(selectIngredientsStatus);

  if (!ingredient && isFulfilled) {
    return <ModalRejected />;
  }

  if (!ingredient || isPending) {
    return <ModalPending />;
  }

  return (
    <LayoutMain>
      <IngredientDetails ingredient={ingredient} />
    </LayoutMain>
  );
};
