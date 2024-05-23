import { useState, useCallback } from "react";
import { ButtonCheckoutWithModal } from "./button-checkout-with-modal";

export const ButtonCheckoutOrder = () => {
  const [orderId, setOrderId] = useState();

  const handleClick = useCallback(() => {
    setOrderId("034536");
  }, []);

  return (
    <ButtonCheckoutWithModal handleClick={handleClick} orderId={orderId} />
  );
};
