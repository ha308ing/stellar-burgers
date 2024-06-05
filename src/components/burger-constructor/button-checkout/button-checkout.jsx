import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

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
