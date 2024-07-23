import { ModalPortal } from "../modal-portal/modal-portal";
import styles from "./modal-alert.module.scss";
import type { FC, PropsWithChildren, ReactNode } from "react";

export interface IProps extends PropsWithChildren {
  icon?: ReactNode;
  closeModalHandler?: () => void;
}

export const ModalAlert: FC<IProps> = ({
  icon,
  closeModalHandler,
  children,
}) => {
  return (
    <ModalPortal closeModalHandler={closeModalHandler}>
      <div className={styles.container}>
        {icon}
        <div className={styles.message}>{children}</div>
      </div>
    </ModalPortal>
  );
};
