import { useState, useEffect } from "react";
import styles from "./app.module.scss";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { order } from "../../utils/mock-data";
import { formatIngredients, flatOrder, addIngredientsQty } from "../../utils";
import { INGREDIENTS_API_URL } from "../../config";
import { ModalLoading } from "../modal-loading/modal-loading";
import { ModalConnectError } from "../modal-connect-error/modal-connect-error";

const App = () => {
  const [orderState] = useState(order);
  const [ingredientsApi, setIngredientsApi] = useState({
    status: "loading",
    data: [],
  });

  const getIngredients = async () => {
    try {
      const response = await fetch(INGREDIENTS_API_URL, {
        mode: "cors",
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) throw Error();
      const { data } = await response.json();
      setIngredientsApi({ status: "ok", data });
    } catch (e) {
      setIngredientsApi({ status: "error", data: [] });
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const handleRetry = () => {
    setIngredientsApi({ status: "loading", data: [] });
    getIngredients();
  };

  const ingredientsRaw = ingredientsApi.data;
  const orderFlatted = flatOrder(orderState);
  const ingredientsQty = addIngredientsQty(ingredientsRaw, orderFlatted);

  const [ingredientsGrouped, ingredientsGroups] =
    formatIngredients(ingredientsQty);

  return ingredientsApi.status === "loading" ? (
    <ModalLoading />
  ) : ingredientsApi.status === "error" || ingredientsQty.length === 0 ? (
    <ModalConnectError handleRetry={handleRetry} />
  ) : (
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
