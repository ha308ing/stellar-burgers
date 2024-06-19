import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "./ingredient-details";
import { selectIngredient } from "../../services/ingredients";

export const IngredientDetailsParams = () => {
  const { ingredientId } = useParams();
  const ingredient = useSelector(selectIngredient(ingredientId));

  return <IngredientDetails ingredient={ingredient} />;
};
