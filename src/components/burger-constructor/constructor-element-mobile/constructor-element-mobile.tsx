import {
  CurrencyIcon,
  DeleteIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-mobile.module.scss";
import type { FC } from "react";
import type { IIngredient } from "types";

interface IProps {
  price: IIngredient["price"];
  text: IIngredient["name"];
  thumbnail: IIngredient["image"];
  handleClose?: () => void;
  isLocked?: boolean;
}

export const ConstructorElementMobile: FC<IProps> = ({
  price,
  text,
  thumbnail,
  handleClose,
  isLocked = false,
}) => {
  return (
    <div className={styles.constructorElementMobile} data-islocked={isLocked}>
      <img src={thumbnail} alt={text} className={styles.image} />
      <div className={styles.name}>{text}</div>
      <div className={styles.price}>
        {price}
        <CurrencyIcon type="primary" />
      </div>
      {!isLocked && (
        <div className={styles.delete}>
          <DeleteIcon type="primary" onClick={handleClose} />
        </div>
      )}
    </div>
  );
};
