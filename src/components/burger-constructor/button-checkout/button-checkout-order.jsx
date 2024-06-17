import { ButtonCheckoutWithModal } from "./button-checkout-with-modal";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../../services/order";
import {
  selectIsBurgerValid,
  selectBurgerIds,
} from "../../../services/burger-constructor";

export const ButtonCheckoutOrder = () => {
  const burgerIds = useSelector(selectBurgerIds);
  const isBurgerValid = useSelector(selectIsBurgerValid);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(orderActions.postOrder(burgerIds));

  return (
    <ButtonCheckoutWithModal
      handleClick={handleClick}
      disabled={!isBurgerValid}
    />
  );
};
