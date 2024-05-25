import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Modal } from "./modal/modal";
import { ModalOverlay } from "./modal-overlay/modal-overlay";
import { MODAL_ROOT_ELEMENT } from "../../config";

export const ModalPortal = ({ children, closeModalHandler = null }) => {
  const keyHandler = useCallback(
    (e) => {
      const isCloseKey = e.key && e.key === "Escape";
      if (isCloseKey) closeModalHandler();
    },
    [closeModalHandler],
  );

  useEffect(() => {
    if (!closeModalHandler) return;

    document.addEventListener("keyup", keyHandler);

    return () => {
      document.removeEventListener("keyup", keyHandler);
    };
  }, [keyHandler, closeModalHandler]);

  return createPortal(
    <>
      <Modal closeModalHandler={closeModalHandler}>{children}</Modal>
      <ModalOverlay closeModalHandler={closeModalHandler} />
    </>,
    MODAL_ROOT_ELEMENT,
  );
};

ModalPortal.propTypes = {
  closeModalHandler: PropTypes.func,
};
