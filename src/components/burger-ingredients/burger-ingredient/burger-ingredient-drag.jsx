import { useDrag } from "react-dnd";
import { INGREDIENT_TYPES, DRAG_TYPES } from "../../../utils";
import { BurgerIngredientLink } from "./burger-ingredient-link/burger-ingredient-link";
import { IngredientShape } from "../../../utils/prop-types";

export const BurgerIngredientDrag = ({ ingredient }) => {
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

BurgerIngredientDrag.propTypes = {
  ingredient: IngredientShape.isRequired,
};
