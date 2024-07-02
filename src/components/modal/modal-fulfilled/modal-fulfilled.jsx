import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalAlert } from "../modal-alert/modal-alert";
import PropTypes from "prop-types";

export const ModalFulfilled = ({ children, closeModalHandler }) => (
  <ModalAlert icon={<CheckMarkIcon />} closeModalHandler={closeModalHandler}>
    {children}
  </ModalAlert>
);

ModalFulfilled.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
