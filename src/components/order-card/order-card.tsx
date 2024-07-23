import { useAppSelector } from "hooks";
import { useMemo } from "react";
import type { FC } from "react";
import { selectIngredients } from "services";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card.module.scss";
import { IngredientsChips } from "./ingredients-chips";
import type { IOrderLocal } from "types";

interface IProps {
  orderInfo: IOrderLocal;
  withStatus?: boolean;
}

export const OrderCard: FC<IProps> = ({ orderInfo, withStatus = false }) => {
  const {
    status,
    updatedAt,
    ingredients: ingredientsIds,
    name,
    number,
    statusLocal,
  } = orderInfo;
  const ingredientsStore = useAppSelector(selectIngredients);
  const date = new Date(updatedAt);

  const price = useMemo(
    () =>
      ingredientsIds.reduce(
        (price, ingredientId) =>
          (price += ingredientsStore[ingredientId]?.price ?? 0),
        0,
      ),
    [ingredientsStore, ingredientsIds],
  );

  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div className={styles.number}>#{number}</div>
        <FormattedDate date={date} className={styles.date} />
      </div>
      <div>
        <div className={styles.name}>{name}</div>
        {withStatus && (
          <div
            className={`${styles.status} ${status === "pending" ? styles.pending : ""}`}
          >
            {statusLocal}
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <IngredientsChips ingredientsIds={ingredientsIds} />
        <div className={styles.price}>
          {price}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  );
};
