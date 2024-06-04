import PropTypes from "prop-types";
import { ModalPortal } from "../modal-portal/modal-portal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { ingredientWithQtyType } from "../../utils/prop-types";

export const IngredientDetailsModal = ({ ingredient, closeModalHandler }) => (
  <ModalPortal closeModalHandler={closeModalHandler}>
    <IngredientDetails ingredient={ingredient} />
  </ModalPortal>
);

IngredientDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
  ingredient: PropTypes.shape(ingredientWithQtyType).isRequired,
};
