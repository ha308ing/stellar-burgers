import React from "react";
import styles from "./burger-ingredients-group.module.scss";
import PropTypes from "prop-types";
import { BurgerIngredientLink } from "../burger-ingredient/burger-ingredient-link/burger-ingredient-link";
import { useSelector } from "react-redux";
import { selectGroup } from "../../../services/ingredients";

export const BurgerIngredientsGroup = React.forwardRef(
  ({ groupIndex }, ref) => {
    const { groupName, ingredients } = useSelector(selectGroup(groupIndex));

    return (
      <section className={styles.container} ref={ref}>
        <header className={styles.header}>{groupName}</header>
        <div className={styles.group}>
          {ingredients.map((ingredient) => (
            <BurgerIngredientLink
              key={ingredient._id}
              ingredientId={ingredient._id}
            />
          ))}
        </div>
      </section>
    );
  },
);

BurgerIngredientsGroup.propTypes = {
  groupIndex: PropTypes.number.isRequired,
};
