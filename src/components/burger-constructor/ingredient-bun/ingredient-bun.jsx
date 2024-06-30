import { useDispatch, useSelector } from "react-redux";
import {
  burgerConstructorActions,
  selectBurger,
} from "../../../services/burger-constructor";
import styles from "./ingredient-bun.module.scss";
import { ConstructorElement as Element } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElementMobile as ElementMobile } from "../constructor-element-mobile/constructor-element-mobile";
import { withMobile } from "../../../hocs/withMobile";
import PropTypes from "prop-types";

const ConstructorElement = withMobile(Element, ElementMobile);

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
    <div className={styles.noIngredient} data-type={type}>
      выберете булку
    </div>
  );
};

ConstructorElement.propTypes = {
  type: PropTypes.oneOf(["top", "bottom"]).isRequired,
};
