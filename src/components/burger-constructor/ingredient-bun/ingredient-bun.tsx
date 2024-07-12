import { useAppDispatch, useAppSelector } from "hooks";
import { burgerConstructorActions, selectBurger } from "services";
import styles from "./ingredient-bun.module.scss";
import { ConstructorElement as Element } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElementMobile as ElementMobile } from "../constructor-element-mobile/constructor-element-mobile";
import { withMobile } from "hocs";
import type { FC } from "react";
import type { TComponentProps } from "types";

interface IProps {
  type: "bottom" | "top";
}

const ConstructorElement = withMobile<TComponentProps<typeof Element>>(
  Element,
  ElementMobile,
);

export const IngredientBun: FC<IProps> = ({ type }) => {
  const { bun } = useAppSelector(selectBurger);
  const dispatch = useAppDispatch();

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
