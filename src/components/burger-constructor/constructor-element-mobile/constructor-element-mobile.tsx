import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-mobile.module.scss";
import type { FC } from "react";
import type { IIngredient } from "types";

interface IProps {
  price: IIngredient["price"];
  text: IIngredient["name"];
  thumbnail: IIngredient["image"];
}

// TODO: add swipe to remove
export const ConstructorElementMobile: FC<IProps> = ({
  price,
  text,
  thumbnail,
}) => {
  return (
    <div className={styles.constructorElementMobile}>
      <img src={thumbnail} alt={text} className={styles.image} />
      <div className={styles.name}>{text}</div>
      <div className={styles.price}>
        {price}
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};
