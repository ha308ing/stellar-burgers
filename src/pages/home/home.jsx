import styles from "./home.module.scss";
import {
  BurgerIngredients,
  BurgerConstructor,
  LayoutMain,
} from "../../components";

export const HomePage = () => {
  return (
    <LayoutMain>
      <div className={styles.container}>
        <h1 className={styles.heading}>Соберите бургер</h1>
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </div>
    </LayoutMain>
  );
};
