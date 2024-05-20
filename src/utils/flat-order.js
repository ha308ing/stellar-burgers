/**
 * make order from {"bun": {id, qty}, "inner": [{id,qty}, ...]}
 * to be like {id: qty, ...} for BurgerIngredients counters
 */

export const flatOrder = (order) => {
  const { bun, inner } = order;

  const flatOrder = {};

  if (bun) {
    const id = bun._id;

    flatOrder[id] = 1;
  }

  inner.forEach(({ _id }) => {
    if (!flatOrder[_id]) flatOrder[_id] = 0;
    flatOrder[_id]++;
  });

  return flatOrder;
};
