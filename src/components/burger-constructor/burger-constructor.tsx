import styles from "./burger-constructor.module.scss";
import { DropContainer } from "./drop-container/drop-container";
import { IngredientBun } from "./ingredient-bun/ingredient-bun";
import { IngredientsInner } from "./ingredients-inner/ingredients-inner";
import type { FC } from "react";

export const BurgerConstructor: FC = () => (
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
  </section>
);
