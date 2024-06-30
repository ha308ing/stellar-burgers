import { useSelector } from "react-redux";
import { OrderSummaryCheckout } from "../order-summary-checkout";
import { selectIsBurgerValid } from "../../../services/burger-constructor";
import { ModalMobile as Modal } from "../../modal/modal-mobile";
import { BurgerConstructor } from "../../burger-constructor/burger-constructor";
import PropTypes from "prop-types";

export const ModalConstructor = ({ closeModalHandler }) => {
  const isBurgerValid = useSelector(selectIsBurgerValid);

  return (
    isBurgerValid && (
      <Modal closeModalHandler={closeModalHandler} title="Заказ">
        <BurgerConstructor />
        <OrderSummaryCheckout />
      </Modal>
    )
  );
};

ModalConstructor.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
