import PropTypes from "prop-types";
import styles from "./modal-overlay.module.scss";

export const ModalOverlay = ({ closeModalHandler }) => (
  <div className={styles.container} onClick={closeModalHandler}></div>
);

ModalOverlay.propTypes = {
  closeModalHandler: PropTypes.func,
};
