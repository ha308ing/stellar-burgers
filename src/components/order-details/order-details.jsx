import PropTypes from "prop-types";
import styles from "./order-details.module.scss";
import doneImage from "../../images/done.png";

export const OrderDetails = ({ orderId }) => (
  <section className={styles.container}>
    <h1 className={styles.header}>{orderId}</h1>
    <span className={styles.subHeader}>идентификатор заказа</span>
    <img src={doneImage} className={styles.image} alt="" />
    <span className={styles.message}>Ваш заказ начали готовить</span>
    <span className={styles.subMessage}>
      Дождитесь готовности на орбитальной станции
    </span>
  </section>
);

OrderDetails.propTypes = {
  orderId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};