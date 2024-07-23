import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-total.module.scss";
import { useAppSelector } from "hooks";
import { selectBurgerTotal } from "services";
import type { FC } from "react";

export const OrderTotal: FC = () => {
  const total = useAppSelector(selectBurgerTotal);

  return (
    <div className={styles.total}>
      {total} <CurrencyIcon type="primary" />
    </div>
  );
};
