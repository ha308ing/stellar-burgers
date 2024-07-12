import { useDrag } from "react-dnd";
import { INGREDIENT_TYPES, DRAG_TYPES } from "utils";
import { BurgerIngredientLink } from "./burger-ingredient-link/burger-ingredient-link";
import type { FC } from "react";
import { IIngredient } from "types";

interface IProps {
  ingredient: IIngredient;
}

export const BurgerIngredientDrag: FC<IProps> = ({ ingredient }) => {
  const [, dragRef] = useDrag({
    type:
      ingredient.type === INGREDIENT_TYPES.BUN
        ? DRAG_TYPES.BUN
        : DRAG_TYPES.INGREDIENT,
    item: ingredient,
  });

  return (
    <section ref={dragRef}>
      <BurgerIngredientLink ingredient={ingredient} />
    </section>
  );
};
