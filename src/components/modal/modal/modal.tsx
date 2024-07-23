import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.scss";
import type { FC, PropsWithChildren } from "react";
import type { TComponentProps } from "types";

export interface IProps extends PropsWithChildren {
  closeModalHandler?: TComponentProps<typeof CloseIcon>["onClick"];
}

export const Modal: FC<IProps> = ({ children, closeModalHandler = null }) => (
  <section className={styles.container}>
    <section className={styles.content}>{children}</section>
    {closeModalHandler && (
      <div className={styles.closeIconContainer}>
        <CloseIcon onClick={closeModalHandler} type="primary" />
      </div>
    )}
  </section>
);
