import { selectIsBurgerValid } from "../services/burger-constructor";
import { selectProfile } from "../services/profile";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../hooks";

export const withOrderValidate =
  <T extends {}>(Component: React.JSXElementConstructor<T>): React.FC<T> =>
  (props) => {
    const isBurgerValid = useAppSelector(selectIsBurgerValid);
    const { user } = useAppSelector(selectProfile);
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
