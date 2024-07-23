import { withOrderValidate } from "hocs";
import { ButtonCheckout } from "./button-checkout";

export const ButtonCheckoutValidOrder = withOrderValidate(ButtonCheckout);
