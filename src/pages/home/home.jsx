import { useEffect } from "react";
import styles from "./home.module.scss";
import {
  BurgerIngredients,
  BurgerConstructor,
  ModalLoading,
  ModalConnectError,
  LayoutMain,
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
