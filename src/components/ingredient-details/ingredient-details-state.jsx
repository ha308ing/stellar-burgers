import { selectIngredient } from "../../services/ingredient";
import { useSelector } from "react-redux";
import { IngredientDetails } from "./ingredient-details";

export const IngredientDetailsState = () => {
  const ingredient = useSelector(selectIngredient);

  return <IngredientDetails ingredient={ingredient} />;
};
