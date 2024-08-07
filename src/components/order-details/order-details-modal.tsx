import { useAppDispatch, useAppSelector } from "hooks";
import { orderActions, selectOrderInfo } from "services";
import { ModalPending, ModalRejected } from "components/modal";
import { OrderDetails } from "components/order-details";
import { ROUTES } from "utils";
import { withMobileModal } from "hocs";
import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./order-details-modal.module.scss";

const Modal = withMobileModal(OrderDetails, "Заказ оформлен");

export const OrderDetailsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { isPending, isRejected, isFulfilled } =
    useAppSelector(selectOrderInfo);

  const closeModalClearOrder = () => {
    dispatch(orderActions.clearOrder());
  };

  if (isPending)
    return (
      <ModalPending>
        <div>оформляем заказ</div>
        <Link type="primary" to={ROUTES.ORDERS} className={styles.linkToOrders}>
          история заказов
        </Link>
      </ModalPending>
    );

  if (isRejected)
    return (
      <ModalRejected
        closeModalHandler={() => {
          dispatch(orderActions.resetOrderIdStatus());
        }}
      >
        не удалось оформить заказ
      </ModalRejected>
    );

  if (isFulfilled) return <Modal closeModalHandler={closeModalClearOrder} />;

  return null;
};
