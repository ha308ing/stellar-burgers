import styles from "./home.module.scss";
import {
  BurgerIngredients,
  BurgerConstructor,
  LayoutMain,
} from "../../components";
import { withMobile } from "../../hocs/withMobile";
import { OrderSummaryConstructor } from "../../components/order-summary/order-summary-constructor";
import { OrderSummaryCheckout } from "../../components/order-summary/order-summary-checkout";
import { OrderDetailsModal } from "../../components/order-details/order-details-modal";

const MainMobile = () => (
  <>
    <BurgerIngredients />
    <OrderSummaryConstructor />
  </>
);

const MainDesktop = () => (
  <>
    <BurgerIngredients />
    <BurgerConstructor />
    <OrderSummaryCheckout />
  </>
);

const Main = withMobile(MainDesktop, MainMobile);

export const HomePage = () => {
  return (
    <>
      <LayoutMain>
        <div className={styles.container}>
          <h1 className={styles.heading}>Соберите бургер</h1>
          <main className={styles.main}>
            <Main />
          </main>
        </div>
      </LayoutMain>
      <OrderDetailsModal />
    </>
  );
};
