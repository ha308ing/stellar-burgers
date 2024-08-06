import styles from "./order-details.module.scss";
import doneImage from "images/done.png";
import { useAppSelector } from "hooks";
import { selectOrderInfo } from "services";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "utils";

export const OrderDetails: FC = () => {
  const { orderId, orderName } = useAppSelector(selectOrderInfo);
  const location = useLocation();

  return (
    <section className={styles.container} data-test-id="order-details">
      <span className={styles.subHeader}>{orderName}</span>
      <h1 className={styles.header}>
        <Link
          to={`${ROUTES.ORDERS}/${orderId}`}
          state={{ background: location }}
          title="показать заказ"
          className={styles.link}
        >
          {orderId}
        </Link>
      </h1>
      <span className={styles.subHeader}>идентификатор заказа</span>
      <img src={doneImage} className={styles.image} alt="" />
      <span className={styles.message}>Ваш заказ начали готовить</span>
      <span className={styles.subMessage}>
        Дождитесь готовности на орбитальной станции
      </span>
    </section>
  );
};
