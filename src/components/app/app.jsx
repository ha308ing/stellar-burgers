import { useEffect } from "react";
import styles from "./app.module.scss";
import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { ModalLoading } from "../modal-loading/modal-loading";
import { ModalConnectError } from "../modal-connect-error/modal-connect-error";
import { useDispatch, useSelector } from "react-redux";
import {
  ingredientsActions,
  selectIgredientsGrouped,
} from "../../services/ingredients";
import { STATUSES } from "../../utils";

const App = () => {
  const { status, ingredientsQty } = useSelector(selectIgredientsGrouped);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientsActions.getIngredients());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(ingredientsActions.getIngredients());
  };

  return status === STATUSES.PENDING ? (
    <ModalLoading />
  ) : status === STATUSES.REJECTED || ingredientsQty === 0 ? (
    <ModalConnectError handleRetry={handleRetry} />
  ) : (
    <section className={styles.container}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </section>
  );
};

export default App;
