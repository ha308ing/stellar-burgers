import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./order-card-link.module.scss";
import { OrderCard } from "./order-card";
import type { IOrderLocal } from "types";

interface IProps {
  orderInfo: IOrderLocal;
  withStatus?: boolean;
}

export const OrderCardLink: FC<IProps> = ({
  orderInfo,
  withStatus = false,
}) => {
  const location = useLocation();

  return (
    <Link
      to={`${orderInfo.number}`}
      state={{ background: location }}
      className={styles.link}
    >
      <OrderCard orderInfo={orderInfo} withStatus={withStatus} />
    </Link>
  );
};
