import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectBurgerIds, orderActions } from "services";
import type { FC } from "react";

export const ButtonCheckout: FC = () => {
  const burgerIds = useAppSelector(selectBurgerIds);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(orderActions.postOrder(burgerIds));
  };

  return (
    <Button
      type="primary"
      size="medium"
      htmlType="button"
      onClick={handleClick}
      data-test-id="button-checkout"
    >
      Оформить заказ
    </Button>
  );
};
