import { withMobileModal } from "../../hocs/withMobile";
import { IngredientDetailsParams } from "./ingredient-details-params";
import { useNavigate } from "react-router-dom";

const Modal = withMobileModal(IngredientDetailsParams);

export const IngredientDetailsModal = () => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  return <Modal closeModalHandler={handleModalClose} />;
};
