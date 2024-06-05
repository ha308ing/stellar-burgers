import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./burger-ingredient.module.scss";
import {
  burgerConstructorActions,
  selectIngredientQty,
} from "../../../services/burger-constructor";
import { selectIngredient } from "../../../services/ingredients";
import { ingredientActions } from "../../../services/ingredient";
import { useDispatch, useSelector } from "react-redux";

export const BugerIngredient = ({ ingredientId, handleClick }) => {
  const ingredient = useSelector(selectIngredient(ingredientId));
  const qty = useSelector(selectIngredientQty(ingredientId));
  const { image, image_mobile, image_large, name, price } = ingredient;

  const dispatch = useDispatch();

  return (
    <section
      className={styles.container}
      onClick={() => {
        dispatch(ingredientActions.setIngredient(ingredient));
        dispatch(burgerConstructorActions.addIngredient(ingredient));
        handleClick();
      }}
    >
      <img
        srcSet={`${image_mobile} 1x, ${image} 2x, ${image_large} 3x`}
        alt={name}
        className={styles.image}
        width={240}
        height={120}
      />
      <div className={styles.price}>
        {price} <CurrencyIcon type="primary" />
      </div>
      <div>{name}</div>
      {qty > 0 && <Counter count={qty} extraClass={styles.qty} />}
    </section>
  );
};

BugerIngredient.propTypes = {
  ingredientId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
