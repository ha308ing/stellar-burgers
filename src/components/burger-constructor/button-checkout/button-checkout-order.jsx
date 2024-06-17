import { ButtonCheckoutWithModal } from "./button-checkout-with-modal";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../../services/order";
import {
  selectIsBurgerValid,
  selectBurgerIds,
} from "../../../services/burger-constructor";
import { selectProfile } from "../../../services/profile";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const ButtonCheckoutOrder = () => {
  const burgerIds = useSelector(selectBurgerIds);
  const isBurgerValid = useSelector(selectIsBurgerValid);
  const dispatch = useDispatch();
  const { user } = useSelector(selectProfile);
  const navigate = useNavigate();

  const handleClick = () => dispatch(orderActions.postOrder(burgerIds));

  if (!isBurgerValid)
    return (
      <Button htmlType="button" disabled={true}>
        Соберите бургер
      </Button>
    );

  if (!user)
    return (
      <Button
        htmlType="button"
        onClick={() => {
          navigate(ROUTES.LOGIN);
        }}
      >
        Войти
      </Button>
    );

  return <ButtonCheckoutWithModal handleClick={handleClick} />;
};
