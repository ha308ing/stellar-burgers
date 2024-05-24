import React from "react";
import styles from "./burger-ingredients-group.module.scss";
import PropTypes from "prop-types";
import { ingredientWithQtyShape } from "../../../utils/prop-types";
import { BurgerIngredientWithModal } from "../burger-ingredient/burger-ingredient-with-modal";

export const BurgerIngredientsGroup = React.forwardRef(
  ({ groupName, ingredients }, ref) => (
    <section className={styles.container} ref={ref}>
      <header className={styles.header}>{groupName}</header>
      <div className={styles.group}>
        {ingredients.map((ingredient) => (
          <BurgerIngredientWithModal
            key={ingredient._id}
            ingredient={ingredient}
          />
        ))}
      </div>
    </section>
  ),
);

BurgerIngredientsGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientWithQtyShape.isRequired).isRequired,
};
