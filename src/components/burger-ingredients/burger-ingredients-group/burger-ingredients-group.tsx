import React from "react";
import styles from "./burger-ingredients-group.module.scss";
import { useAppSelector } from "hooks";
import { selectGroup } from "services";
import { BurgerIngredient } from "../burger-ingredient";

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
