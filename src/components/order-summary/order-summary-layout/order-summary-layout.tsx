import { OrderTotal } from "../order-total/order-total";
import styles from "./order-summary-layout.module.scss";
import type { FC, PropsWithChildren } from "react";

export const OrderSummaryLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={styles.summary}>
      <OrderTotal />
      {children}
    </section>
  );
};

export const OrderSummaryMobileLayout: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={styles.summaryMobile}>
      <OrderSummaryLayout>{children}</OrderSummaryLayout>
    </div>
  );
};
