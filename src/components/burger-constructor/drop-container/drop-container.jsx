import styles from "./drop-container.module.css";
import { useDrop } from "react-dnd";
import { burgerConstructorActions } from "../../../services/burger-constructor";
import { useDispatch } from "react-redux";

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
