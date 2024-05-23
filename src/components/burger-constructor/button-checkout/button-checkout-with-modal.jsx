import { withModal } from "../../../hocs/withModal";
import { ButtonCheckout } from "./button-checkout";
import { OrderDetailsModal } from "../../order-details/order-details-modal";

export const ButtonCheckoutWithModal = withModal(
  ButtonCheckout,
  OrderDetailsModal,
);
