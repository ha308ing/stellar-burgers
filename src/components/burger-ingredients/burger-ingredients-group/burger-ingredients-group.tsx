import React from "react";
import styles from "./burger-ingredients-group.module.scss";
import { BurgerIngredientDrag } from "../burger-ingredient/burger-ingredient-drag";
import { useAppSelector } from "../../../hooks";
import { selectGroup } from "../../../services/ingredients";
import { withMobile } from "../../../hocs/withMobile";
import { BurgerIngredientAdd } from "../burger-ingredient/burger-ingredient-add/burger-ingredinet-add";
import type { IIngredient } from "../../../types";

interface IIngredientProps {
  ingredient: IIngredient;
}

const BurgerIngredient = withMobile<IIngredientProps>(
  BurgerIngredientDrag,
  BurgerIngredientAdd,
);

interface IProps {
  groupIndex: number;
}

export const BurgerIngredientsGroup = React.forwardRef<HTMLDivElement, IProps>(
  ({ groupIndex }, ref) => {
    const { groupName, ingredients } = useAppSelector(selectGroup(groupIndex));

    return (
      <section className={styles.container} ref={ref}>
        <header className={styles.header}>{groupName}</header>
        <div className={styles.group}>
          {ingredients.map((ingredient) => (
            <BurgerIngredient key={ingredient._id} ingredient={ingredient} />
          ))}
        </div>
      </section>
    );
  },
);
