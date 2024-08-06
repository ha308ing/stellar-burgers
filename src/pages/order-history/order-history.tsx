import { LayoutProfile as LP, Message, OrderCardLink } from "components";
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
            <Message message="грузим историю заказов" />
          ) : isError ? (
            <Message
              message={message}
              clickHandler={retryHandler}
              buttonText="попробовать снова"
            />
          ) : isNoOrders ? (
            <Message
              message="нет заказов"
              clickHandler={retryHandler}
              buttonText="попробовать снова"
            />
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
