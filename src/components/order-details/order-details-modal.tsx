import { useAppDispatch, useAppSelector } from "../../hooks";
import { OrderDetails } from "../order-details/order-details";
import { orderActions, selectOrderInfo } from "../../services/order";
import { ModalPending, ModalRejected } from "../modal";
import { STATUSES } from "../../utils";
import { withMobileModal } from "../../hocs/with-mobile";
import type { FC } from "react";

const Modal = withMobileModal(OrderDetails, "Заказ оформлен");

export const OrderDetailsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { orderIdStatus } = useAppSelector(selectOrderInfo);

  const closeModalClearOrder = () => {
    dispatch(orderActions.clearOrder());
  };

  if (orderIdStatus === STATUSES.PENDING)
    return <ModalPending>оформляем заказ</ModalPending>;

  if (orderIdStatus === STATUSES.REJECTED)
    return (
      <ModalRejected
        closeModalHandler={() => {
          dispatch(orderActions.resetOrderIdStatus());
        }}
      >
        не удалось оформить заказ
      </ModalRejected>
    );

  if (orderIdStatus === STATUSES.FULFILLED)
    return <Modal closeModalHandler={closeModalClearOrder} />;

  return null;
};
