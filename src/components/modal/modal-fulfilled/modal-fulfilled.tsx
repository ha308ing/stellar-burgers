import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalAlert, IProps as IModalProps } from "../modal-alert/modal-alert";
import PropTypes from "prop-types";
import type { FC } from "react";

export const ModalFulfilled: FC<IModalProps> = ({
  children,
  closeModalHandler,
}) => (
  <ModalAlert
    icon={<CheckMarkIcon type="primary" />}
    closeModalHandler={closeModalHandler}
  >
    {children}
  </ModalAlert>
);

ModalFulfilled.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
