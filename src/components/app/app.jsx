import { useState, useEffect } from "react";
import styles from "./app.module.scss";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { order } from "../../utils/mock-data";
import { formatIngredients, flatOrder, addIngredientsQty } from "../../utils";
import { ModalLoading } from "../modal-loading/modal-loading";
import { ModalConnectError } from "../modal-connect-error/modal-connect-error";
import { burgersService } from "../../utils/burgers-api-service";

const App = () => {
  const [ingredients, setIngredients] = useState({
    status: "loading",
    data: [],
  });

  useEffect(() => {
    burgersService.getIngredients(setIngredients);
  }, []);

  const handleRetry = () => {
    setIngredients({ status: "loading", data: [] });
    burgersService.getIngredients(setIngredients);
  };

  const ingredientsRaw = ingredients.data;
  const orderFlatted = flatOrder(order);
  const ingredientsQty = addIngredientsQty(ingredientsRaw, orderFlatted);

  const [ingredientsGrouped, ingredientsGroups] =
    formatIngredients(ingredientsQty);

  return ingredients.status === "loading" ? (
    <ModalLoading />
  ) : ingredients.status === "error" || ingredientsQty.length === 0 ? (
    <ModalConnectError handleRetry={handleRetry} />
  ) : (
    <section className={styles.container}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients
          ingredients={ingredientsGrouped}
          groups={ingredientsGroups}
        />
        <BurgerConstructor order={order} />
      </main>
    </section>
  );
};

export default App;
