import { LayoutProfile as LP, FeedMessage, OrderCardLink } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, type FC } from "react";
import { selectOrdersHistory, ordersHistoryActions } from "services";
import styles from "./order-history.module.scss";

export const OrderHistoryPage: FC = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    isNoOrders,
    ordersByNumbers,
    ordersNumbers,
    isError,
    message,
  } = useAppSelector(selectOrdersHistory);

  useEffect(() => {
    dispatch(ordersHistoryActions.connect());

    return () => {
      dispatch(ordersHistoryActions.disconnect());
    };
  }, [dispatch]);

  const retryHandler = () => {
    dispatch(ordersHistoryActions.connect());
  };

  const ordersCards = ordersNumbers.map((orderNumber) => {
    const orderInfo = ordersByNumbers[orderNumber];
    return (
      <OrderCardLink
        key={orderNumber}
        orderInfo={orderInfo}
        withStatus={true}
      />
    );
  });

  return (
    <>
      <LP.Content>
        <section className={styles.orders}>
          {isLoading ? (
            <FeedMessage message="грузим историю заказов" />
          ) : isError ? (
            <FeedMessage message={message} clickHandler={retryHandler} />
          ) : isNoOrders ? (
            <FeedMessage message="нет заказов" clickHandler={retryHandler} />
          ) : (
            ordersCards
          )}
        </section>
      </LP.Content>
      <LP.Footer>
        В этом разделе вы можете
        <br /> просмотреть свою историю заказов
      </LP.Footer>
    </>
  );
};
