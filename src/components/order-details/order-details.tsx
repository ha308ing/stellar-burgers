import styles from "./order-details.module.scss";
import doneImage from "../../images/done.png";
import { useAppSelector } from "../../hooks";
import { selectOrderInfo } from "../../services/order";
import type { FC } from "react";

export const OrderDetails: FC = () => {
  const { orderId, orderName } = useAppSelector(selectOrderInfo);

  return (
    <section className={styles.container}>
      <span className={styles.subHeader}>{orderName}</span>
      <h1 className={styles.header}>{orderId}</h1>
      <span className={styles.subHeader}>идентификатор заказа</span>
      <img src={doneImage} className={styles.image} alt="" />
      <span className={styles.message}>Ваш заказ начали готовить</span>
      <span className={styles.subMessage}>
        Дождитесь готовности на орбитальной станции
      </span>
    </section>
  );
};