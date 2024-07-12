import { withMobile } from "../../hocs/with-mobile";
import { ButtonCheckout } from "./button-checkout";
import {
  OrderSummaryLayout,
  OrderSummaryMobileLayout,
} from "./order-summary-layout/order-summary-layout";
import type { FC } from "react";

const Layout = withMobile(OrderSummaryLayout, OrderSummaryMobileLayout);

export const OrderSummaryCheckout: FC = () => (
  <Layout>
    <ButtonCheckout />
  </Layout>
);
