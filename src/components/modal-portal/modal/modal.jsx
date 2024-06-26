import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";

export const Modal = ({ children, closeModalHandler = null }) => (
  <section className={styles.container}>
    {closeModalHandler && (
      <div className={styles.closeIconContainer}>
        <CloseIcon onClick={closeModalHandler} />
      </div>
    )}
    <section className={styles.content}>{children}</section>
  </section>
);

Modal.propTypes = {
  closeModalHandler: PropTypes.func,
};
