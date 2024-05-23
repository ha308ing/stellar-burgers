import { useState } from "react";
import styles from "./app.module.scss";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { ingredientsRaw, order } from "../../utils/mock-data";
import { formatIngredients, flatOrder, addIngredientsQty } from "../../utils";

const App = () => {
  const [orderState] = useState(order);
  const orderFlatted = flatOrder(orderState);
  const ingredientsQty = addIngredientsQty(ingredientsRaw, orderFlatted);

  const [ingredientsGrouped, ingredientsGroups] =
    formatIngredients(ingredientsQty);

  return (
    <section className={styles.container}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients
          ingredients={ingredientsGrouped}
          groups={ingredientsGroups}
        />
        <BurgerConstructor order={orderState} />
      </main>
    </section>
  );
};

export default App;
