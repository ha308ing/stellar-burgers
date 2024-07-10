import styles from "./modal-overlay.module.scss";
import type { FC, ComponentProps } from "react";

interface IProps {
  closeModalHandler?: ComponentProps<"div">["onClick"];
}

export const ModalOverlay: FC<IProps> = ({ closeModalHandler }) => (
  <div className={styles.container} onClick={closeModalHandler}></div>
);
