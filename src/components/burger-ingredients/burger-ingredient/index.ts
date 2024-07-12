import { withMobile } from "hocs";
import { BurgerIngredientDrag } from "./burger-ingredient-drag";
import { BurgerIngredientAdd } from "./burger-ingredient-add/burger-ingredinet-add";

export const BurgerIngredient = withMobile(
  BurgerIngredientDrag,
  BurgerIngredientAdd,
);
