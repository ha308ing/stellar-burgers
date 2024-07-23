import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredientLink } from "../burger-ingredient-link/burger-ingredient-link";
import { useAppDispatch } from "hooks";
import { burgerConstructorActions } from "services";
import styles from "./burger-ingredinet-add.module.scss";
import type { FC } from "react";
import type { IIngredient } from "types";

interface IProps {
  ingredient: IIngredient;
}

export const BurgerIngredientAdd: FC<IProps> = ({ ingredient }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(burgerConstructorActions.addIngredient(ingredient));
  };

  return (
    <section className={styles.container}>
      <BurgerIngredientLink ingredient={ingredient} />
      <Button onClick={handleClick} type="secondary" htmlType="button">
        Добавить
      </Button>
    </section>
  );
};
