import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-total.module.scss";
import { useSelector } from "react-redux";
import { selectBurgerTotal } from "../../../services/burger-constructor";

export const OrderTotal = () => {
  const total = useSelector(selectBurgerTotal);

  return (
    <div className={styles.total}>
      {total} <CurrencyIcon type="primary" />
    </div>
  );
};
