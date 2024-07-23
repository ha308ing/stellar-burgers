import styles from "./home.module.scss";
import {
  BurgerIngredients,
  BurgerConstructor,
  LayoutMain,
  OrderSummaryConstructor,
  OrderSummaryCheckout,
  OrderDetailsModal,
} from "components";
import { withMobile } from "hocs";
import type { FC } from "react";

const MainMobile: FC = () => (
  <>
    <BurgerIngredients />
    <OrderSummaryConstructor />
  </>
);

const MainDesktop: FC = () => (
  <>
    <BurgerIngredients />
    <BurgerConstructor />
    <OrderSummaryCheckout />
  </>
);

const Main = withMobile(MainDesktop, MainMobile);

export const HomePage: FC = () => (
  <>
    <LayoutMain title="Соберите бургер">
      <main className={styles.main}>
        <Main />
      </main>
    </LayoutMain>
    <OrderDetailsModal />
  </>
);
