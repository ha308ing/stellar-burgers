import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalAlert } from "../modal-alert/modal-alert";
import type { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  closeModalHandler?: () => void;
}

export const ModalRejected: FC<IProps> = ({ children, closeModalHandler }) => (
  <ModalAlert
    icon={<CloseIcon type="primary" />}
    closeModalHandler={closeModalHandler}
  >
    {children}
  </ModalAlert>
);
