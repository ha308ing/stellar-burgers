import styles from "./burger-constructor.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ButtonCheckoutOrder } from "./button-checkout/button-checkout-order";
import { useSelector } from "react-redux";
import { selectBurgerTotal } from "../../services/burger-constructor";
import { DropContainer } from "./drop-container/drop-container";
import { IngredientBun } from "./ingredient-bun/ingredient-bun";
import { IngredientsInner } from "./ingredients-inner/ingredients-inner";

export const BurgerConstructor = () => {
  const total = useSelector(selectBurgerTotal);

  return (
    <section className={styles.container}>
      <div className={styles.ingredients}>
        <DropContainer type="top" ingredientType="bun">
          <IngredientBun type="top" />
        </DropContainer>
        <DropContainer type="middle" ingredientType="ingredient">
          <IngredientsInner />
        </DropContainer>
        <DropContainer type="bottom" ingredientType="bun">
          <IngredientBun type="bottom" />
        </DropContainer>
      </div>
      <div className={styles.summary}>
        <div className={styles.total}>
          {total} <CurrencyIcon type="primary" />
        </div>
        <ButtonCheckoutOrder />
      </div>
    </section>
  );
};
