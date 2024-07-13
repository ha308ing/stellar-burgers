import { useAppSelector } from "hooks";
import { OrderSummaryCheckout } from "../order-summary-checkout";
import { selectIsBurgerValid } from "services";
import { ModalMobile as Modal } from "components/modal";
import { BurgerConstructor } from "components/burger-constructor";
import type { FC } from "react";

interface IProps {
  closeModalHandler?: () => void;
}

export const ModalConstructor: FC<IProps> = ({ closeModalHandler }) => {
  const isBurgerValid = useAppSelector(selectIsBurgerValid);

  return isBurgerValid ? (
    <Modal closeModalHandler={closeModalHandler} title="Заказ">
      <BurgerConstructor />
      <OrderSummaryCheckout />
    </Modal>
  ) : null;
};
