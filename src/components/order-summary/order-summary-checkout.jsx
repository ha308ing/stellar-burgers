import { withMobile } from "../../hocs/withMobile";
import { ButtonCheckout } from "./button-checkout";
import {
  OrderSummaryLayout,
  OrderSummaryMobileLayout,
} from "./order-summary-layout/order-summary-layout";

const Layout = withMobile(OrderSummaryLayout, OrderSummaryMobileLayout);

export const OrderSummaryCheckout = () => (
  <Layout>
    <ButtonCheckout />
  </Layout>
);
