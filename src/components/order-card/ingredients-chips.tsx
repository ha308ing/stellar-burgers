import { useAppSelector } from "hooks";
import { useMemo, type FC } from "react";
import { selectIngredients } from "services";
import type { IIngredient } from "types";
import styles from "./ingredients-chips.module.scss";
import { IngredientChip } from "components/ingredient-chip/ingredient-chip";

interface IProps {
  ingredientsIds: IIngredient["_id"][];
}

const CHIPS_AMOUT = 6;

export const IngredientsChips: FC<IProps> = ({ ingredientsIds }) => {
  const ingredientsStore = useAppSelector(selectIngredients);

  const chipsDelta = ingredientsIds.length - CHIPS_AMOUT;
  const isExtraChips = chipsDelta > 0;

  const ingredientsIdsShort = useMemo(() => {
    const short: IIngredient["_id"][] = [];
    let i = 0;
    while (i < CHIPS_AMOUT) {
      const id = ingredientsIds[i];
      if (id == null) break;
      short[i] = id;
      i++;
    }
    return short;
  }, [ingredientsIds]);

  const chips = ingredientsIdsShort.map((ingredientId, index) => {
    const { image_mobile: image } = ingredientsStore[ingredientId];
    const isLastChip = index === CHIPS_AMOUT - 1;
    return (
      <IngredientChip
        key={index}
        image={image}
        label={isExtraChips && isLastChip ? `+${chipsDelta}` : undefined}
        className={styles.chip}
      />
    );
  });

  return <section className={styles.container}>{chips}</section>;
};
