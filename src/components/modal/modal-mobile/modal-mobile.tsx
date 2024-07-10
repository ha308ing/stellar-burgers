import styles from "./modal-mobile.module.scss";
import { createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { MODAL_ROOT_ELEMENT } from "../../../config";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC, PropsWithChildren } from "react";

const ModalContext = createContext<ICloseModalHandler>({
  closeModalHandler: undefined,
});

const ModalMobileHeader: FC<PropsWithChildren> = ({ children }) => {
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

const ModalMobileContent: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

interface IProps extends PropsWithChildren, ICloseModalHandler {}

interface ICloseModalHandler {
  closeModalHandler?: () => void;
}

const Modal: FC<IProps> = ({ children, closeModalHandler }) => {
  return createPortal(
    <ModalContext.Provider value={{ closeModalHandler }}>
      <div className={styles.overlay}>
        <div className={styles.container}>{children}</div>
      </div>
    </ModalContext.Provider>,
    MODAL_ROOT_ELEMENT,
  );
};

export const ModalMobile = Object.assign(Modal, {
  Header: ModalMobileHeader,
  Content: ModalMobileContent,
});
