import { LayoutMain, FeedMessage, OrderCardLink } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, type FC } from "react";
import { ordersFeedActions, selectOrdersFeed } from "services";
import styles from "./orders-feed.module.scss";

export const OrdersFeedPage: FC = () => {
  const {
    isLoading,
    isNoOrders,
    orderNumbersDone,
    orderNumbersPending,
    isError,
    message,
    total,
    totalToday,
    ordersByNumbers,
    ordersNumbers,
  } = useAppSelector(selectOrdersFeed);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(ordersFeedActions.connect());

    return () => {
      dispatch(ordersFeedActions.disconnect());
    };
  }, [dispatch]);

  const retryHandler = () => {
    dispatch(ordersFeedActions.connect());
  };

  const ordersCards = ordersNumbers.map((orderNumber) => {
    const orderInfo = ordersByNumbers[orderNumber];
    return <OrderCardLink key={orderNumber} orderInfo={orderInfo} />;
  });

  const ordersDone = orderNumbersDone.map((orderNumber) => (
    <li key={orderNumber}>{orderNumber}</li>
  ));

  const ordersPending = orderNumbersPending.map((orderNumber) => (
    <li key={orderNumber}>{orderNumber}</li>
  ));

  return (
    <LayoutMain title="Лента заказов">
      {isLoading ? (
        <FeedMessage message="грузим ленту заказов" />
      ) : isError ? (
        <FeedMessage message={message} clickHandler={retryHandler} />
      ) : isNoOrders ? (
        <FeedMessage message="нет заказов" clickHandler={retryHandler} />
      ) : (
        <main className={styles.main}>
          <section className={styles.orders}>{ordersCards}</section>

          <section className={styles.summary}>
            <div className={styles.done}>
              <div className={styles.summaryTitle}>Готовы:</div>
              <div className={styles.summaryDone}>
                <ul>{ordersDone}</ul>
              </div>
            </div>

            <div className={styles.pending}>
              <div className={styles.summaryTitle}>В работе:</div>
              <div className={styles.summaryPending}>
                <ul>{ordersPending}</ul>
              </div>
            </div>

            <div className={styles.total}>
              <div className={styles.summaryTitle}>Выполнено за всё время:</div>
              <div className={styles.summaryTotal}>{total}</div>
            </div>

            <div className={styles.totalToday}>
              <div className={styles.summaryTitle}>Выполнено за сегодня:</div>
              <div className={styles.summaryTotal}>{totalToday}</div>
            </div>
          </section>
        </main>
      )}
    </LayoutMain>
  );
};
