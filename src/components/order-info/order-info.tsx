import type { FC } from "react";
import type { IIngredient, IOrderLocal } from "types";
import { IngredientItem } from "./components";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "hooks";
import { selectIngredients } from "services";
import styles from "./order-info.module.scss";

interface IProps {
  orderInfo: IOrderLocal;
}

export const OrderInfo: FC<IProps> = ({ orderInfo }) => {
  const { updatedAt, ingredients, name, number, status, statusLocal } =
    orderInfo;
  const ingredientsData = useAppSelector(selectIngredients);

  const ingredientsGroupped = ingredients.reduce(
    (
      acc: { ingredients: Record<IIngredient["_id"], number>; total: number },
      ingredientId,
    ) => {
      if (ingredientsData[ingredientId] == null) return acc;
      if (acc.ingredients[ingredientId] == null) {
        acc.ingredients[ingredientId] = 1;
      } else {
        acc.ingredients[ingredientId]++;
      }
      acc.total += ingredientsData[ingredientId].price;
      return acc;
    },
    { ingredients: {}, total: 0 },
  );

  const date = new Date(updatedAt);

  return (
    <section className={styles.container}>
      <div className={styles.number}>#{number}</div>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.status} data-status={status}>
        {statusLocal}
      </div>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>Состав:</h2>
        <ul className={styles.contentList}>
          {Object.entries(ingredientsGroupped.ingredients).map(
            ([ingredientId, count]) => (
              <li key={ingredientId}>
                <IngredientItem
                  ingredient={ingredientsData[ingredientId]}
                  count={count}
                />
              </li>
            ),
          )}
        </ul>
      </div>
      <div className={styles.footer}>
        <FormattedDate date={date} className={styles.date} />
        <div className={styles.price}>
          {ingredientsGroupped.total}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};
