import type { FC } from "react";
import type { IIngredient } from "types";
import styles from "./ingredient-chip.module.scss";

interface IProps {
  image: IIngredient["image_mobile"];
  label?: string;
  className?: string;
}

export const IngredientChip: FC<IProps> = ({ image, label, className }) => {
  return (
    <div className={`${styles.chip} ${className}`} data-with-label={!!label}>
      <img className={styles.image} src={image} alt="" />
      {!!label && <div className={styles.label}>{label}</div>}
    </div>
  );
};
