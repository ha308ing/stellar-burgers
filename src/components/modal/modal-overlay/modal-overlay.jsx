import PropTypes from "prop-types";
import styles from "./modal-overlay.module.scss";

export const ModalOverlay = ({ closeModalHandler = null }) => (
  <div className={styles.container} onClick={closeModalHandler}></div>
);

ModalOverlay.propTypes = {
  closeModalHandler: PropTypes.func,
};
