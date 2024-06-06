import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./burger-ingredient.module.scss";
import { selectIngredientQty } from "../../../services/burger-constructor";
import { selectIngredient } from "../../../services/ingredients";
import { ingredientActions } from "../../../services/ingredient";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { INGREDIENT_TYPES } from "../../../utils";
import { DRAG_TYPES } from "../../../utils/drag-types";

export const BugerIngredient = ({ ingredientId, handleClick }) => {
  const ingredient = useSelector(selectIngredient(ingredientId));
  const qty = useSelector(selectIngredientQty(ingredientId));
  const [, dragRef] = useDrag({
    type:
      ingredient.type === INGREDIENT_TYPES.BUN
        ? DRAG_TYPES.BUN
        : DRAG_TYPES.INGREDIENT,
    item: ingredient,
  });
  const dispatch = useDispatch();

  const { image, image_mobile, image_large, name, price } = ingredient;

  return (
    <section
      className={styles.container}
      onClick={() => {
        dispatch(ingredientActions.setIngredient(ingredient));
        handleClick();
      }}
      ref={dragRef}
      draggable
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
