import { useAppSelector } from "hooks";
import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router-dom";
import { selectOrdersFeed, selectOrdersHistory } from "services";
import { OrderInfo } from "./order-info";
import { burgersApiController } from "utils";
import type { IOrderLocal } from "types";

export const OrderInfoParams: FC = () => {
  const { orderNumber } = useParams();
  const { ordersByNumbers: ordersFeed, isNoOrders: isNoFeedOrders } =
    useAppSelector(selectOrdersFeed);
  const { ordersByNumbers: ordersHistory, isNoOrders: isNoHistoryOrders } =
    useAppSelector(selectOrdersHistory);
  const [order, setOrder] = useState<IOrderLocal | null>(null);

  const isNoFeed = isNoFeedOrders && isNoHistoryOrders;

  const isError =
    order == null &&
    (orderNumber == null ||
      (orderNumber &&
        ordersFeed[orderNumber] == null &&
        ordersHistory[orderNumber] == null));

  useEffect(() => {
    if (orderNumber == null) return;
    if (isNoFeed) {
      (async () => {
        if (orderNumber == null) {
          return setOrder(null);
        }
        const order = await burgersApiController.getOrder(orderNumber);
        setOrder(order);
      })();
    } else {
      setOrder(ordersFeed[orderNumber] || ordersHistory[orderNumber]);
    }
  }, [orderNumber, ordersFeed, ordersHistory, isNoFeed]);

  return order == null ? (
    <h1>загрузка</h1>
  ) : isError ? (
    <h1>заказ не найден</h1>
  ) : (
    <main>
      <OrderInfo orderInfo={order} />
    </main>
  );
};
