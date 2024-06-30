import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredientLink } from "../burger-ingredient-link/burger-ingredient-link";
import { useDispatch } from "react-redux";
import { burgerConstructorActions } from "../../../../services/burger-constructor";
import styles from "./burger-ingredinet-add.module.scss";
import { IngredientShape } from "../../../../utils/prop-types";

export const BurgerIngredientAdd = ({ ingredient }) => {
  const dispatch = useDispatch();
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

BurgerIngredientAdd.propTypes = {
  ingredient: IngredientShape.isRequired,
};
