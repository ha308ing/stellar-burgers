import styles from "./modal-mobile.module.scss";
import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { MODAL_ROOT_ELEMENT } from "../../../config";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ModalContext = createContext();

const ModalMobileHeader = ({ children }) => {
  const { closeModalHandler } = useContext(ModalContext);

  return (
    <div className={styles.header}>
      <div className={styles.title}>{children}</div>
      {closeModalHandler && (
        <div
          className={styles.closeIcon}
          onClick={closeModalHandler}
          title="Закрыть"
        >
          <CloseIcon type="primary" />
        </div>
      )}
    </div>
  );
};

const ModalMobileContent = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

const ModalMobile = ({ children, closeModalHandler }) => {
  return createPortal(
    <ModalContext.Provider value={{ closeModalHandler }}>
      <div className={styles.overlay}>
        <div className={styles.container}>{children}</div>
      </div>
    </ModalContext.Provider>,
    MODAL_ROOT_ELEMENT,
  );
};

Object.assign(ModalMobile, {
  Header: ModalMobileHeader,
  Content: ModalMobileContent,
});

export { ModalMobile };

ModalMobile.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
