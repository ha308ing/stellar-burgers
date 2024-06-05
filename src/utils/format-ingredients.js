import { getGroupNamePriority } from "./ingredients-groups-priority";

/**
 * format ingredientsRaw by group and return list of groups
 */
export const formatIngredients = (ingredientsRaw) => {
  const ingredientsGrouped = ingredientsRaw.reduce(
    (acc, entry) => {
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
