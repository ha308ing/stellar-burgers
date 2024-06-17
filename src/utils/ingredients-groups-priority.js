export const INGREDIENT_TYPES = {
  BUN: "bun",
  SAUCE: "sauce",
  MAIN: "main",
};

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

export const getGroupNamePriority = (groupType) => {
  const indexes = Object.keys(ingredientGroups);
  const index = indexes.indexOf(groupType);
  return index > -1
    ? {
        groupName: ingredientGroups[groupType].groupName,
        groupPriority: index,
      }
    : {
        groupName: ingredientGroups.unknown.groupName,
        groupPriority: indexes.length,
      };
};
