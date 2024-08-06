import { LayoutMain, OrderInfoParams } from "components";
import type { FC } from "react";
import styles from "./order-info.module.scss";

export const OrdersInfoPage: FC = () => {
  return (
    <LayoutMain>
      <main className={styles.main}>
        <OrderInfoParams />
      </main>
    </LayoutMain>
  );
};
