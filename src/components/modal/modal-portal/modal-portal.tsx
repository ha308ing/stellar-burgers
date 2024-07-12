import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { Modal, IProps as IModalProps } from "../modal/modal";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { MODAL_ROOT_ELEMENT } from "config";
import styles from "./modal-portal.module.scss";
import type { FC } from "react";

interface IProps extends IModalProps {}

export const ModalPortal: FC<IProps> = ({ children, closeModalHandler }) => {
  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key == null || closeModalHandler == null) return;
      const isCloseKey = e.key && e.key === "Escape";
      if (isCloseKey) closeModalHandler();
    },
    [closeModalHandler],
  );

  useEffect(() => {
    if (closeModalHandler == null) return;

    document.addEventListener("keyup", keyHandler);

    return () => {
      document.removeEventListener("keyup", keyHandler);
    };
  }, [keyHandler, closeModalHandler]);

  return createPortal(
    <div className={styles.portal}>
      <ModalOverlay closeModalHandler={closeModalHandler} />
      <Modal closeModalHandler={closeModalHandler}>{children}</Modal>
    </div>,
    MODAL_ROOT_ELEMENT,
  );
};
