import PropTypes from "prop-types";
import { ModalPortal } from "../modal-portal/modal-portal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";

export const IngredientDetailsModal = ({
  closeModalHandler,
  image_large,
  name,
  calories,
  proteins,
  fat,
  carbohydrates,
}) => (
  <ModalPortal closeModalHandler={closeModalHandler}>
    <IngredientDetails
      image_large={image_large}
      name={name}
      calories={calories}
      proteins={proteins}
      fat={fat}
      carbohydrates={carbohydrates}
    />
  </ModalPortal>
);

IngredientDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};
