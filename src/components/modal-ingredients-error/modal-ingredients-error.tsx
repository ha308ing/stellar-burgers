import styles from "./modal-ingredients-error.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalRejected } from "../modal";
import { useAppDispatch } from "../../hooks";
import { ingredientsActions } from "../../services/ingredients";
import type { FC } from "react";

export const ModalIngredientsError: FC = () => {
  const dispatch = useAppDispatch();

  const handleRetry = () => {
    dispatch(ingredientsActions.getIngredients());
  };

  return (
    <ModalRejected>
      <div className={styles.content}>
        <h1 className={styles.header}>Ошибка подключения</h1>
        <div className={styles.text}>
          <p>Вы можете сделать заказ через нашего телепата.</p>
          <p>
            Сфокусируйтесь на мысли "хочу стеллар бургер" в течение 15
            октантских секунд
          </p>
        </div>
        <ul className={styles.notes}>
          <li>услуги телепата оплачиваются отдельно</li>
          <li>
            телепат работает круглосуточно с перерывом на обед с 13:00 до 14:00
          </li>
        </ul>
        <Button
          type="primary"
          size="large"
          onClick={handleRetry}
          htmlType="button"
        >
          Попробовать снова
        </Button>
      </div>
    </ModalRejected>
  );
};
