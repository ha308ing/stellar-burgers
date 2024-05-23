import PropTypes from "prop-types";
import styles from "./modal-connect-error.module.scss";
import { ModalPortal } from "../modal-portal/modal-portal";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const ModalConnectError = ({ handleRetry }) => (
  <ModalPortal>
    <div className={styles.content}>
      <h1 className={styles.header}>Ошибка подключения</h1>
      <div className={styles.text}>
        <p>Вы можете сделать заказ через нашего телепата.</p>
        <p>
          Сфокусируйтесь на мысли "хочу стеллар бургер"
          <br />
          на 15 октантских секунд
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
  </ModalPortal>
);

ModalConnectError.propTypes = {
  handleRetry: PropTypes.func.isRequired,
};
