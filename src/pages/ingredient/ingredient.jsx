import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectIngredient, selectStatus } from "../../services/ingredients";
import { STATUSES } from "../../utils";
import { LayoutMain, IngredientDetails } from "../../components";
import { ModalPending, ModalRejected } from "./components";

export const IngredientPage = () => {
  const { ingredientId } = useParams();
  const ingredient = useSelector(selectIngredient(ingredientId));
  const ingredientsStatus = useSelector(selectStatus);

  if (!ingredient && ingredientsStatus === STATUSES.FULFILLED) {
    return <ModalRejected ingredientId={ingredientId} />;
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
