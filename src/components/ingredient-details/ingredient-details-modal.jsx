import { ModalAlert } from "../modal/modal-alert/modal-alert";
import { IngredientDetailsParams } from "./ingredient-details-params";
import { useNavigate } from "react-router-dom";

export const IngredientDetailsModal = () => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  return (
    <ModalAlert closeModalHandler={handleModalClose}>
      <IngredientDetailsParams />
    </ModalAlert>
  );
};
