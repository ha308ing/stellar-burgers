/**
 * format ingredientsRaw by group and return list of groups
 */
export const formatIngredients = (ingredientsRaw) =>
  ingredientsRaw.reduce(
    (acc, entry) => {
      const group = entry.type;
      let groupName;
      let groupPriority;
      switch (group) {
        case "bun":
          groupName = "булки";
          groupPriority = 0;
          break;
        case "sauce":
          groupName = "соусы";
          groupPriority = 1;
          break;
        case "main":
          groupName = "начинки";
          groupPriority = 2;
          break;
        default:
          groupName = "прочее";
      }

      acc[1][groupPriority] = groupName;

      if (!acc[0][groupPriority]) acc[0][groupPriority] = [];
      acc[0][groupPriority].push({ ...entry, groupName });

      return acc;
    },
    [{}, []],
  );
