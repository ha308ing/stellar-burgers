import type { IIngredient } from "types";

/**
 * @param ingredientsData array of ingredients from the api
 * @returns an object with ids as keys and ingredient as value, and arrays of ids
 */
export const prepareIngredients = (ingredientsData: IIngredient[]) =>
  ingredientsData.reduce(
    (
      acc: {
        ingredients: Record<IIngredient["_id"], IIngredient>;
        ingredientsIds: IIngredient["_id"][];
      },
      ingredient,
    ) => {
      const id = ingredient._id;
      acc.ingredients[id] = ingredient;
      acc.ingredientsIds.push(id);
      return acc;
    },
    { ingredients: {}, ingredientsIds: [] },
  );
