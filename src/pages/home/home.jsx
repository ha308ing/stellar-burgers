import { useEffect } from "react";
import styles from "./home.module.scss";
import {
  AppHeader,
  BurgerIngredients,
  BurgerConstructor,
  ModalLoading,
  ModalConnectError,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  ingredientsActions,
  selectIgredientsGrouped,
} from "../../services/ingredients";
import { STATUSES } from "../../utils";

export const HomePage = () => {
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
