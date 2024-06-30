import React from "react";
import styles from "./burger-ingredients-group.module.scss";
import PropTypes from "prop-types";
import { BurgerIngredientDrag } from "../burger-ingredient/burger-ingredient-drag";
import { useSelector } from "react-redux";
import { selectGroup } from "../../../services/ingredients";
import { withMobile } from "../../../hocs/withMobile";
import { BurgerIngredientAdd } from "../burger-ingredient/burger-ingredient-add/burger-ingredinet-add";

const BurgerIngredient = withMobile(BurgerIngredientDrag, BurgerIngredientAdd);

export const BurgerIngredientsGroup = React.forwardRef(
  ({ groupIndex }, ref) => {
    const { groupName, ingredients } = useSelector(selectGroup(groupIndex));

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

BurgerIngredientsGroup.propTypes = {
  groupIndex: PropTypes.number.isRequired,
};
