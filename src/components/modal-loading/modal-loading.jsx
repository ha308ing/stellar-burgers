import styles from "./modal-loading.module.scss";
import { ModalPortal } from "../modal-portal/modal-portal";

export const ModalLoading = () => (
  <ModalPortal>
    <section className={styles.content}>Ищем бургеры</section>
  </ModalPortal>
);
