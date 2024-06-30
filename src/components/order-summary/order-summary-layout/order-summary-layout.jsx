import { OrderTotal } from "../order-total/order-total";
import styles from "./order-summary-layout.module.scss";

export const OrderSummaryLayout = ({ children }) => {
  return (
    <section className={styles.summary}>
      <OrderTotal />
      {children}
    </section>
  );
};

export const OrderSummaryMobileLayout = ({ children }) => {
  return (
    <div className={styles.summaryMobile}>
      <OrderSummaryLayout>{children}</OrderSummaryLayout>
    </div>
  );
};
