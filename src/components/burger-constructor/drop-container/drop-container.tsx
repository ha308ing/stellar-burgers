import styles from "./drop-container.module.scss";
import { useDrop } from "react-dnd";
import { burgerConstructorActions } from "services";
import { useAppDispatch } from "hooks";
import type { FC, PropsWithChildren } from "react";
import type { IIngredient } from "types";
import type { TDragType } from "utils";

interface IProps extends PropsWithChildren {
  type: "top" | "bottom" | "middle";
  ingredientType: TDragType;
}

export const DropContainer: FC<IProps> = ({
  type,
  ingredientType,
  children,
}) => {
  const dispatch = useAppDispatch();
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: ingredientType,
    drop: (ingredient: IIngredient) =>
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
