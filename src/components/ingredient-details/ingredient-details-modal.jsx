import PropTypes from "prop-types";
import { ModalAlert } from "../modal/modal-alert/modal-alert";
import { IngredientDetailsState } from "./ingredient-details-state";

export const IngredientDetailsModal = ({ closeModalHandler }) => {
  return (
    <ModalAlert closeModalHandler={closeModalHandler}>
      <IngredientDetailsState />
    </ModalAlert>
  );
};

IngredientDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
