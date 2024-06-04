import styles from "./burger-ingredients.module.scss";
import { BurgerIngredientsTabs } from "./burger-ingredients-tabs/burger-ingredients-tabs";
import { BurgerIngredientsGroup } from "./burger-ingredients-group/burger-ingredients-group";
import PropTypes from "prop-types";
import { ingredientWithQtyShape } from "../../utils/prop-types";

export const BurgerIngredients = ({ ingredients, groups }) => {
  // array for refs of scroll targets (group of ingredients)
  const scrollPoints = [];

  // function to pass as ref to ingredients group, to keep ref in the parent
  const setScrollPoint = (index) => (element) => {
    scrollPoints[index] = element;
  };

  const scrollToView = (index) => {
    scrollPoints[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      <BurgerIngredientsTabs groups={groups} clickHandler={scrollToView} />
      <section className={styles.ingredients}>
        {Object.entries(ingredients).map(([groupIndex, groupIngredients]) => (
          <BurgerIngredientsGroup
            groupName={groups[groupIndex]}
            ingredients={groupIngredients}
            key={groupIndex}
            ref={setScrollPoint(groupIndex)}
          />
        ))}
      </section>
    </section>
  );
};

BurgerIngredients.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  ingredients: PropTypes.shape({ index: ingredientWithQtyShape }).isRequired,
};
