import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "./ingredient-details";
import { ModalPending, ModalRejected } from "../modal";
import { selectIngredient, selectStatus } from "../../services/ingredients";
import { STATUSES } from "../../utils";

export const IngredientDetailsParams = () => {
  const { ingredientId } = useParams();
  const ingredient = useSelector(selectIngredient(ingredientId));
  const ingredientsStatus = useSelector(selectStatus);

  if (!ingredient && ingredientsStatus === STATUSES.FULFILLED) {
    return <ModalRejected ingredientId={ingredientId} />;
  }

  if (!ingredient || ingredientsStatus === STATUSES.PENDING) {
    return <ModalPending />;
  }

  return <IngredientDetails ingredient={ingredient} />;
};
