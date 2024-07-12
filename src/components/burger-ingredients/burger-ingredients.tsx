import styles from "./burger-ingredients.module.scss";
import { BurgerIngredientsTabs } from "./burger-ingredients-tabs/burger-ingredients-tabs";
import { BurgerIngredientsGroup } from "./burger-ingredients-group/burger-ingredients-group";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectGroups, ingredientsTabsActions } from "services";
import type { FC, WheelEvent } from "react";

export const BurgerIngredients: FC = () => {
  const groups = useAppSelector(selectGroups);
  const dispatch = useAppDispatch();

  // array for refs of scroll targets (group of ingredients)
  const scrollPoints: HTMLDivElement[] = [];

  // function to pass as ref to ingredients group, to keep ref in the parent
  const setScrollPoint = (index: number) => (element: HTMLDivElement) => {
    scrollPoints[index] = element;
  };

  const scrollToView = (index: number) => {
    scrollPoints[index].scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
    const container = e.target;
    const { y: zero } = (container as HTMLDivElement).getBoundingClientRect();
    const childGroups = (container as HTMLDivElement).children;
    let min: number | null = null;
    const childRects = Array.from(childGroups).map((group) => {
      const { y: groupY } = group.getBoundingClientRect();
      let distanceToZero = groupY - zero;
      distanceToZero = distanceToZero < 0 ? -distanceToZero : distanceToZero;
      if (min == null) {
        min = distanceToZero;
      } else {
        min = distanceToZero < min ? distanceToZero : min;
      }
      return distanceToZero;
    });
    const groupIndex = childRects.indexOf(min ?? 0);
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
