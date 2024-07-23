import { ButtonModalConstructor } from "./button-modal-constructor/button-modal-constructor";
import { OrderSummaryMobileLayout } from "./order-summary-layout/order-summary-layout";
import type { FC } from "react";

export const OrderSummaryConstructor: FC = () => (
  <OrderSummaryMobileLayout>
    <ButtonModalConstructor />
  </OrderSummaryMobileLayout>
);
