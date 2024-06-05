import styles from "./burger-ingredients.module.scss";
import { BurgerIngredientsTabs } from "./burger-ingredients-tabs/burger-ingredients-tabs";
import { BurgerIngredientsGroup } from "./burger-ingredients-group/burger-ingredients-group";
import { useDispatch, useSelector } from "react-redux";
import { selectGroups } from "../../services/ingredients";
import { ingredientsTabsActions } from "../../services/ingredients-tabs";

export const BurgerIngredients = () => {
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();

  // array for refs of scroll targets (group of ingredients)
  const scrollPoints = [];

  // function to pass as ref to ingredients group, to keep ref in the parent
  const setScrollPoint = (index) => (element) => {
    scrollPoints[index] = element;
  };

  const scrollToView = (index) => {
    scrollPoints[index].scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (e) => {
    const container = e.target;
    const { y: zero } = container.getBoundingClientRect();
    const childGroups = container.children;
    let min = null;
    const childRects = [...childGroups].map((group) => {
      const { y: groupY } = group.getBoundingClientRect();
      let distanceToZero = groupY - zero;
      distanceToZero = distanceToZero < 0 ? -distanceToZero : distanceToZero;
      if (min === null) {
        min = distanceToZero;
      } else {
        min = distanceToZero < min ? distanceToZero : min;
      }
      return distanceToZero;
    });
    const groupIndex = childRects.indexOf(min);
    dispatch(ingredientsTabsActions.setActiveTabIndex(groupIndex));
  };

  return (
    <section className={styles.container}>
      <BurgerIngredientsTabs clickHandler={scrollToView} />
      <section className={styles.ingredients} onScroll={handleScroll}>
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
