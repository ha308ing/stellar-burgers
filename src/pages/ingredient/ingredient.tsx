import { useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { selectIngredient, selectStatus } from "../../services/ingredients";
import { STATUSES } from "../../utils";
import { LayoutMain, IngredientDetails } from "../../components";
import { ModalPending, ModalRejected } from "./components";
import type { FC } from "react";

export const IngredientPage: FC = () => {
  const { ingredientId } = useParams();
  const ingredient = useAppSelector(selectIngredient(ingredientId));
  const ingredientsStatus = useAppSelector(selectStatus);

  if (!ingredient && ingredientsStatus === STATUSES.FULFILLED) {
    return <ModalRejected />;
  }

  if (!ingredient || ingredientsStatus === STATUSES.PENDING) {
    return <ModalPending />;
  }

  return (
    <LayoutMain>
      <IngredientDetails ingredient={ingredient} />
    </LayoutMain>
  );
};
