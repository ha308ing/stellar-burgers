import styles from "./burger-ingredient-link.module.scss";
import { BurgerIngredient } from "../burger-ingredient";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "utils";
import type { FC } from "react";
import { IIngredient } from "types";

interface IProps {
  ingredient: IIngredient;
}

export const BurgerIngredientLink: FC<IProps> = ({ ingredient }) => {
  const location = useLocation();

  return (
    <Link
      to={ROUTES.INGREDIENTS_ROOT + "/" + ingredient._id}
      state={{ background: location }}
      className={styles.link}
    >
      <BurgerIngredient ingredient={ingredient} />
    </Link>
  );
};
