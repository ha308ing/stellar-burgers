import { withMobileModal } from "hocs";
import { IngredientDetailsParams } from "./ingredient-details-params";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";

const Modal = withMobileModal(IngredientDetailsParams);

export const IngredientDetailsModal: FC = () => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  return <Modal closeModalHandler={handleModalClose} />;
};
