import { ModalMobile as Modal } from "./modal-mobile";
import type { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  title?: string;
  closeModalHandler?: () => void;
}

export const ModalMobile: FC<IProps> = ({
  title,
  closeModalHandler,
  children,
}) => (
  <Modal closeModalHandler={closeModalHandler}>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content>{children}</Modal.Content>
  </Modal>
);
