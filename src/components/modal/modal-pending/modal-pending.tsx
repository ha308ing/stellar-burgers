import { ModalAlert } from "../modal-alert/modal-alert";
import type { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {}

export const ModalPending: FC<IProps> = ({ children }) => (
  <ModalAlert icon="...">{children}</ModalAlert>
);
