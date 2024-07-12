import { useAppSelector } from "hooks";
import { selectBurger } from "services";
import { IngredientInner } from "../ingredient-inner/ingredient-inner";
import styles from "./ingredients-inner.module.scss";
import type { FC } from "react";

export const IngredientsInner: FC = () => {
  const { inner } = useAppSelector(selectBurger);

  return (
    <div className={styles.innersContainer}>
      {inner.length > 0 ? (
        inner.map((ingredient, index) => (
          <IngredientInner
            ingredient={ingredient}
            index={index}
            key={ingredient.internalId}
          />
        ))
      ) : (
        <div className={styles.noIngredient}>выберете начинки и соусы</div>
      )}
    </div>
  );
};
