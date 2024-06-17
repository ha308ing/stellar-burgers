import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalAlert } from "../modal-alert/modal-alert";
import PropTypes from "prop-types";

export const ModalRejected = ({ children, closeModalHandler }) => (
  <ModalAlert icon={<CloseIcon />} closeModalHandler={closeModalHandler}>
    {children}
  </ModalAlert>
);

ModalRejected.propTypes = {
  closeModalHandler: PropTypes.func,
};
