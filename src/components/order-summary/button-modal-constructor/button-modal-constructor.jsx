import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { withModal } from "../../../hocs/withModal";
import { withOrderValidate } from "../../../hocs/withOrderValidate";
import { ModalConstructor } from "../modal-constructor/modal-constructor";
import PropTypes from "prop-types";

const ButtonShowConstructor = ({ handleClick }) => (
  <Button onClick={handleClick} htmlType="button">
    Показать заказ
  </Button>
);

const ButtonShowConstructorWithValidate = withOrderValidate(
  ButtonShowConstructor,
);

export const ButtonModalConstructor = withModal(
  ButtonShowConstructorWithValidate,
  ModalConstructor,
);

ButtonShowConstructor.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
