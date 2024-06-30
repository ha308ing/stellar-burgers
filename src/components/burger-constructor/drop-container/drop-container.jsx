import styles from "./drop-container.module.scss";
import { useDrop } from "react-dnd";
import { burgerConstructorActions } from "../../../services/burger-constructor";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export const DropContainer = ({ type, ingredientType, children }) => {
  const dispatch = useDispatch();
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: ingredientType,
    drop: (ingredient) =>
      dispatch(burgerConstructorActions.addIngredient(ingredient)),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      className={`${styles.dropContainer} ${type === "top" ? styles.dropContainer_top : type === "bottom" ? styles.dropContainer_bottom : styles.dropContainer_middle} ${canDrop ? styles.canDrop : ""} ${isOver ? styles.isOver : ""}`}
      ref={dropRef}
    >
      {children}
    </div>
  );
};

DropContainer.propTypes = {
  type: PropTypes.oneOf(["top", "bottom", "middle"]).isRequired,
  ingredientType: PropTypes.string.isRequired,
};
