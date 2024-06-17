import styles from "./order-details.module.scss";
import doneImage from "../../images/done.png";
import { useSelector } from "react-redux";
import { selectOrderInfo } from "../../services/order";
import { STATUSES } from "../../utils";

export const OrderDetails = () => {
  const { orderId, orderIdStatus, orderName } = useSelector(selectOrderInfo);

  return (
    <section className={styles.container}>
      <span className={styles.subHeader}>{orderName}</span>
      <h1 className={styles.header}>{`
      ${orderIdStatus === STATUSES.PENDING ? "..." : orderIdStatus === STATUSES.REJECTED ? "😵" : orderId}

      `}</h1>
      <span className={styles.subHeader}>идентификатор заказа</span>
      <img src={doneImage} className={styles.image} alt="" />
      <span className={styles.message}>Ваш заказ начали готовить</span>
      <span className={styles.subMessage}>
        Дождитесь готовности на орбитальной станции
      </span>
    </section>
  );
};
