import { selectIsBurgerValid } from "../services/burger-constructor";
import { selectProfile } from "../services/profile";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

export const withOrderValidate = (Component) => (props) => {
  const isBurgerValid = useSelector(selectIsBurgerValid);
  const { user } = useSelector(selectProfile);
  const navigate = useNavigate();

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

  if (!isBurgerValid)
    return (
      <Button htmlType="button" disabled={true}>
        Соберите бургер
      </Button>
    );

  return <Component {...props} />;
};
