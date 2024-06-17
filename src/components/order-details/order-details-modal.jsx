import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { OrderDetails } from "../order-details/order-details";
import { burgerConstructorActions } from "../../services/burger-constructor";
import { orderActions, selectOrderInfo } from "../../services/order";
import { ModalAlert, ModalPending, ModalRejected } from "../modal";
import { STATUSES } from "../../utils";

export const OrderDetailsModal = ({ closeModalHandler }) => {
  const dispatch = useDispatch();
  const { orderIdStatus } = useSelector(selectOrderInfo);

  const closeModalClearOrder = () => {
    dispatch(burgerConstructorActions.clearBurger());
    dispatch(orderActions.clearOrder());
    closeModalHandler();
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
    return (
      <ModalAlert closeModalHandler={closeModalClearOrder}>
        <OrderDetails />
      </ModalAlert>
    );
};

OrderDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
