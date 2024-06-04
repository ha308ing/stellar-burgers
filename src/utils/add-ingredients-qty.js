/**
 * add qty field (from orderFlatted) to the ingredientsRaw object
 */

export const addIngredientsQty = (ingredientsRaw, orderFlatted) => {
  const ingredientsQty = [];
  for (let ingredient of ingredientsRaw) {
    const id = ingredient._id;
    const ingredientTemp = ingredient;
    ingredientTemp.qty = orderFlatted[id] ?? null;
    ingredientsQty.push(ingredientTemp);
  }
  return ingredientsQty;
};
