import React from "react";
import styles from "./burger-ingredients.module.scss";
import { BurgerIngredientsTabs } from "./burger-ingredients-tabs/burger-ingredients-tabs";
import { BurgerIngredientsGroup } from "./burger-ingredients-group/burger-ingredients-group";
import PropTypes from "prop-types";
import { ingredientWithQtyShape } from "../../utils/prop-types";

export class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);

    this.scrollPoints = [];

    this.setScrollPoint = (index) => (element) => {
      this.scrollPoints[index] = element;
    };
  }

  state = {
    activeTab: null,
  };

  scrollToView = (index) => {
    this.setState({ activeTab: index });
    this.scrollPoints[index].scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const { ingredients, groups } = this.props;

    return (
      <section className={styles.container}>
        <BurgerIngredientsTabs
          groups={groups}
          scrollToView={this.scrollToView}
          activeGroupIndex={this.state.activeTab}
        />
        <section className={styles.ingredients}>
          {Object.entries(ingredients).map(
            ([groupIndex, groupIngredients], index) => (
              <BurgerIngredientsGroup
                groupName={groups[groupIndex]}
                ingredients={groupIngredients}
                key={groupIndex + index}
                groupRef={this.setScrollPoint(groupIndex)}
              />
            ),
          )}
        </section>
      </section>
    );
  }
}

BurgerIngredients.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string),
  ingredients: PropTypes.shape({ index: ingredientWithQtyShape }),
};
