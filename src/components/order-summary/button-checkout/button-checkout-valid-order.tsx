import { withOrderValidate } from "../../../hocs/with-order-validate";
import { ButtonCheckout } from "./button-checkout";

export const ButtonCheckoutValidOrder = withOrderValidate(ButtonCheckout);
