import styles from "./burger-ingredient-link.module.scss";
import { BurgerIngredient } from "../burger-ingredient";

import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../../utils";
import { IngredientShape } from "../../../../utils/prop-types";

export const BurgerIngredientLink = ({ ingredient }) => {
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

BurgerIngredient.propTypes = {
  ingredient: IngredientShape.isRequired,
};
