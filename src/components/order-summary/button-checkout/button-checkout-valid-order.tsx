import { withOrderValidate } from "../../../hocs/withOrderValidate";
import { ButtonCheckout } from "./button-checkout";

export const ButtonCheckoutValidOrder = withOrderValidate(ButtonCheckout);
