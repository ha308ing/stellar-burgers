import { useSelector } from "react-redux";
import { selectBurger } from "../../../services/burger-constructor";
import { IngredientInner } from "../ingredient-inner/ingredient-inner";
import styles from "./ingredients-inner.module.scss";

export const IngredientsInner = () => {
  const { inner } = useSelector(selectBurger);

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
