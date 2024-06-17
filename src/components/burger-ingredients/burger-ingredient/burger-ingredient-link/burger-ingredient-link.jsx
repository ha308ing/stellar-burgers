import { useLocation, Link } from "react-router-dom";
import { ROUTES } from "../../../../utils";
import { BugerIngredient } from "../burger-ingredient";
import styles from "./burger-ingredient-link.module.scss";
import PropTypes from "prop-types";

export const BurgerIngredientLink = ({ ingredientId }) => {
  const location = useLocation();

  return (
    <Link
      to={ROUTES.INGREDIENTS_ROOT + "/" + ingredientId}
      state={{ background: location }}
      className={styles.link}
    >
      <BugerIngredient ingredientId={ingredientId} handleClick={() => {}} />
    </Link>
  );
};

BurgerIngredientLink.propTypes = {
  ingredientId: PropTypes.string.isRequired,
};
