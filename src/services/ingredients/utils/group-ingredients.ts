import { getGroupNamePriority } from "./ingredients-groups-priority";
import type { IIngredient } from "types";

interface IIngredientWithGoupName extends IIngredient {
  groupName: string;
}

type TIngredientsGrouped = {
  [priority: number]: IIngredientWithGoupName[];
};

type TIngredientsGroups = string[];

/**
 * format ingredients by group and return list of groups
 */
export const groupIngredients = (
  ingredients: IIngredient[],
): {
  ingredientsGrouped: TIngredientsGrouped;
  groups: TIngredientsGroups;
} => {
  const ingredientsGrouped = ingredients.reduce(
    (acc: [TIngredientsGrouped, TIngredientsGroups], entry) => {
      const groupType = entry.type;
      const { groupName, groupPriority } = getGroupNamePriority(groupType);

      acc[1][groupPriority] = groupName;

      if (!acc[0][groupPriority]) acc[0][groupPriority] = [];
      acc[0][groupPriority].push({ ...entry, groupName });

      return acc;
    },
    [{}, []],
  );

  return {
    ingredientsGrouped: ingredientsGrouped[0],
    groups: ingredientsGrouped[1],
  };
};
