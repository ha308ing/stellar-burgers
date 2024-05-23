import PropTypes from "prop-types";
import { ModalPortal } from "../modal-portal/modal-portal";
import { OrderDetails } from "../order-details/order-details";

export const OrderDetailsModal = ({ closeModalHandler, orderId }) => (
  <ModalPortal closeModalHandler={closeModalHandler}>
    <OrderDetails orderId={orderId} />
  </ModalPortal>
);

OrderDetailsModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
  orderId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
