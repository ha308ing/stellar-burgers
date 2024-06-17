import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const ButtonCheckout = ({ handleClick, disabled }) => (
  <Button
    type="primary"
    size="medium"
    htmlType="button"
    onClick={handleClick}
    disabled={disabled}
  >
    Оформить заказ
  </Button>
);

ButtonCheckout.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  buttonText: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.elementType.isRequired,
  ]),
};
