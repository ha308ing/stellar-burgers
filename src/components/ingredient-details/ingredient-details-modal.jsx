import PropTypes from "prop-types";
import { ModalAlert } from "../modal/modal-alert/modal-alert";
import { IngredientDetailsParams } from "./ingredient-details-params";

export const IngredientDetailsModal = ({ closeModalHandler }) => {
  return (
    <ModalAlert closeModalHandler={closeModalHandler}>
      <IngredientDetailsParams />
    </ModalAlert>
  );
};

IngredientDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
