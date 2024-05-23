import { withModal } from "../../../hocs/withModal";
import { BugerIngredient } from "./burger-ingredient";
import { IngredientDetailsModal } from "../../ingredient-details/ingredient-details-modal";

export const BurgerIngredientWithModal = withModal(
  BugerIngredient,
  IngredientDetailsModal,
);
