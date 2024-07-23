import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientChip } from "components/ingredient-chip/ingredient-chip";
import type { FC } from "react";
import type { IIngredient } from "types";
import styles from "./ingredient-item.module.scss";

interface IProps {
  ingredient: IIngredient;
  count: number;
}

export const IngredientItem: FC<IProps> = ({ ingredient, count }) => {
  const { image_mobile, name, price } = ingredient;

  return (
    <div className={styles.container}>
      <IngredientChip image={image_mobile} className={styles.image} />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>
        {count} x {price}
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};
