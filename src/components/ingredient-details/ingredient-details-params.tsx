import { useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "./ingredient-details";
import { selectIngredient } from "../../services/ingredients";
import type { FC } from "react";

export const IngredientDetailsParams: FC = () => {
  const { ingredientId } = useParams();
  const ingredient = useAppSelector(selectIngredient(ingredientId));

  return ingredient && <IngredientDetails ingredient={ingredient} />;
};
