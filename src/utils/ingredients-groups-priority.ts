import type { TObjectValues } from "../types";

export const INGREDIENT_TYPES = {
  BUN: "bun",
  SAUCE: "sauce",
  MAIN: "main",
} as const;

export type TIngredientType = TObjectValues<typeof INGREDIENT_TYPES>;

export const ingredientGroups = {
  [INGREDIENT_TYPES.BUN]: {
    groupName: "булки",
  },
  [INGREDIENT_TYPES.SAUCE]: {
    groupName: "соусы",
  },
  [INGREDIENT_TYPES.MAIN]: {
    groupName: "начинки",
  },
  unknown: {
    groupName: "прочее",
  },
};

export const getGroupNamePriority = (groupType: string) => {
  const indexes = Object.keys(ingredientGroups);
  const index = indexes.indexOf(groupType);

  return isIngredientType(groupType)
    ? {
        groupName: ingredientGroups[groupType].groupName,
        groupPriority: index,
      }
    : {
        groupName: ingredientGroups.unknown.groupName,
        groupPriority: indexes.length,
      };
};

function isIngredientType(
  ingredientType: string,
): ingredientType is TIngredientType {
  return ingredientType in ingredientGroups;
}
