import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const ButtonCheckout = ({ handleClick }) => (
  <Button type="primary" size="medium" htmlType="button" onClick={handleClick}>
    Оформить заказ
  </Button>
);
