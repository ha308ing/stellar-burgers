import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { selectBurgerIds } from "../../../services/burger-constructor";
import { orderActions } from "../../../services/order";

export const ButtonCheckout = () => {
  const burgerIds = useSelector(selectBurgerIds);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(orderActions.postOrder(burgerIds));
  };

  return (
    <Button
      type="primary"
      size="medium"
      htmlType="button"
      onClick={handleClick}
    >
      Оформить заказ
    </Button>
  );
};
