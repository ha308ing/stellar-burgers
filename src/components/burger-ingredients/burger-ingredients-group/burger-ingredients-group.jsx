import React from "react";
import { BugerIngredient } from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients-group.module.scss";
import PropTypes from "prop-types";
import { ingredientWithQtyShape } from "../../../utils/prop-types";

export class BurgerIngredientsGroup extends React.Component {
  render() {
    return (
      <section className={styles.container} ref={this.props.groupRef}>
        <header className={styles.header}>{this.props.groupName}</header>
        <div className={styles.group}>
          {this.props.ingredients.map((ingredient, index) => (
            <BugerIngredient key={index} {...ingredient} />
          ))}
        </div>
      </section>
    );
  }
}

BurgerIngredientsGroup.propTypes = {
  groupRef: PropTypes.func,
  groupName: PropTypes.string,
  ingredients: PropTypes.arrayOf(ingredientWithQtyShape),
};
