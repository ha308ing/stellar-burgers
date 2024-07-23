import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.scss";
import { selectIngredientQty } from "services";
import { useAppSelector } from "hooks";
import type { FC } from "react";
import type { IIngredient } from "types";

interface IProps {
  ingredient: IIngredient;
}

export const BurgerIngredient: FC<IProps> = ({ ingredient }) => {
  const qty = useAppSelector(selectIngredientQty(ingredient._id));

  const { image, image_mobile, image_large, name, price } = ingredient;

  return (
    <section className={styles.container}>
      <img
        srcSet={`${image_mobile} 1x, ${image} 2x, ${image_large} 3x`}
        alt={name}
        className={styles.image}
        width={240}
        height={120}
      />
      <div className={styles.price}>
        {price} <CurrencyIcon type="primary" />
      </div>
      <div>{name}</div>
      {qty > 0 && <Counter count={qty} extraClass={styles.qty} />}
    </section>
  );
};
