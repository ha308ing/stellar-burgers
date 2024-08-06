import { useAppSelector } from "hooks";
import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router-dom";
import { selectOrdersFeed, selectOrdersHistory } from "services";
import { OrderInfo } from "./order-info";
import { burgersApiController } from "utils";
import type { IOrderLocal } from "types";
import { Message } from "components/message";

export const OrderInfoParams: FC = () => {
  const { orderNumber } = useParams();
  const { ordersByNumbers: ordersFeed } = useAppSelector(selectOrdersFeed);
  const { ordersByNumbers: ordersHistory } =
    useAppSelector(selectOrdersHistory);
  const [order, setOrder] = useState<IOrderLocal | null>(null);
  const [status, setStatus] = useState<"заказ не найден" | "загрузка" | null>(
    "загрузка",
  );

  useEffect(() => {
    if (orderNumber == null) return setStatus("заказ не найден");
    (async () => {
      let order =
        (await burgersApiController.getOrder(orderNumber)) ||
        ordersFeed[orderNumber] ||
        ordersHistory[orderNumber];
      if (order == null) {
        return setStatus("заказ не найден");
      }
      setOrder(order);
      setStatus(null);
    })();
  }, [orderNumber, ordersFeed, ordersHistory]);

  return !!status ? (
    <Message message={status} />
  ) : order == null ? (
    <Message message="заказ не найден" />
  ) : (
    <main>
      <OrderInfo orderInfo={order} />
    </main>
  );
};
