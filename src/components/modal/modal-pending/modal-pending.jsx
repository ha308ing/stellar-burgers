import { ModalAlert } from "../modal-alert/modal-alert";

export const ModalPending = ({ children }) => (
  <ModalAlert icon="...">{children}</ModalAlert>
);
