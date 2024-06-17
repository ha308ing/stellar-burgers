import PropTypes from "prop-types";
import { ModalPortal } from "../modal-portal/modal-portal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useDispatch } from "react-redux";
import { ingredientActions } from "../../services/ingredient";

export const IngredientDetailsModal = ({ closeModalHandler }) => {
  const dispatch = useDispatch();

  const closeModalResetIngredient = () => {
    dispatch(ingredientActions.resetIngredient());
    closeModalHandler();
  };

  return (
    <ModalPortal closeModalHandler={closeModalResetIngredient}>
      <IngredientDetails />
    </ModalPortal>
  );
};

IngredientDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
