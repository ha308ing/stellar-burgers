import { useDispatch, useSelector } from "react-redux";
import {
  burgerConstructorActions,
  selectBurger,
} from "../../../services/burger-constructor";
import styles from "./ingredient-bun.module.scss";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientBun = ({ type }) => {
  const { bun } = useSelector(selectBurger);
  const dispatch = useDispatch();

  const bunType = type === "top" ? "верх" : type === "bottom" ? "низ" : "";

  return bun ? (
    <ConstructorElement
      price={bun.price}
      text={bun.name + " " + bunType}
      thumbnail={bun.image}
      type={type}
      isLocked={true}
      handleClose={() =>
        dispatch(burgerConstructorActions.removeIngredient(bun.internalId))
      }
    />
  ) : (
    <div className={styles.noIngredient}>выберете булку</div>
  );
};
