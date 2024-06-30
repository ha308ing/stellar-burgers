import { ModalMobile as Modal } from "./modal-mobile";
import PropTypes from "prop-types";

export const ModalMobile = ({ title, closeModalHandler, children }) => (
  <Modal closeModalHandler={closeModalHandler}>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content>{children}</Modal.Content>
  </Modal>
);

ModalMobile.propTypes = {
  title: PropTypes.string,
  closeModalHandler: PropTypes.func.isRequired,
};
