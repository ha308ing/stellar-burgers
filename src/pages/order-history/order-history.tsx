import { LayoutProfile as LP } from "../../components";
import type { FC } from "react";

export const OrderHistoryPage: FC = () => (
  <>
    <LP.Content>
      <h1>Order history</h1>
    </LP.Content>
    <LP.Footer>
      В этом разделе вы можете
      <br /> просмотреть свою историю заказов
    </LP.Footer>
  </>
);
