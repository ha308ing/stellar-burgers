import { useDispatch, useSelector } from "react-redux";
import { OrderDetails } from "../order-details/order-details";
import { orderActions, selectOrderInfo } from "../../services/order";
import { ModalPending, ModalRejected } from "../modal";
import { STATUSES } from "../../utils";
import { withMobileModal } from "../../hocs/withMobile";

const Modal = withMobileModal(OrderDetails, "Заказ оформлен");

export const OrderDetailsModal = () => {
  const dispatch = useDispatch();
  const { orderIdStatus } = useSelector(selectOrderInfo);

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
