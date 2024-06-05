import styles from "./burger-ingredients.module.scss";
import { BurgerIngredientsTabs } from "./burger-ingredients-tabs/burger-ingredients-tabs";
import { BurgerIngredientsGroup } from "./burger-ingredients-group/burger-ingredients-group";
import { useSelector } from "react-redux";
import { selectGroups } from "../../services/ingredients";

export const BurgerIngredients = () => {
  const groups = useSelector(selectGroups);
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
      <BurgerIngredientsTabs clickHandler={scrollToView} />
      <section className={styles.ingredients}>
        {groups.map((_, groupIndex) => (
          <BurgerIngredientsGroup
            groupIndex={+groupIndex}
            key={groupIndex}
            ref={setScrollPoint(groupIndex)}
          />
        ))}
      </section>
    </section>
  );
};
