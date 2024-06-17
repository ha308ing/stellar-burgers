import { ModalPortal } from "../modal-portal/modal-portal";
import PropTypes from "prop-types";
import styles from "./modal-alert.module.scss";

export const ModalAlert = ({ icon, closeModalHandler, children }) => {
  return (
    <ModalPortal closeModalHandler={closeModalHandler}>
      <div className={styles.container}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.message}>{children}</div>
      </div>
    </ModalPortal>
  );
};

ModalAlert.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]),
  closeModalHandler: PropTypes.func,
};
