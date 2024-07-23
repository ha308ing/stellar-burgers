import { withMobileModal } from "hocs";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";
import { OrderInfoParams } from "./order-info-params";

const Modal = withMobileModal(OrderInfoParams);

export const OrderInfoModal: FC = () => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    navigate(-1);
  };

  return <Modal closeModalHandler={handleModalClose} />;
};
