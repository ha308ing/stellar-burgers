import PropTypes from "prop-types";
import { ModalPortal } from "../modal-portal/modal-portal";
import { OrderDetails } from "../order-details/order-details";
import { useDispatch } from "react-redux";
import { burgerConstructorActions } from "../../services/burger-constructor";
import { orderActions } from "../../services/order";

export const OrderDetailsModal = ({ closeModalHandler }) => {
  const dispatch = useDispatch();

  const closeModalClearOrder = () => {
    dispatch(burgerConstructorActions.clearBurger());
    dispatch(orderActions.clearOrder());
    closeModalHandler();
  };

  return (
    <ModalPortal closeModalHandler={closeModalClearOrder}>
      <OrderDetails />
    </ModalPortal>
  );
};

OrderDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
