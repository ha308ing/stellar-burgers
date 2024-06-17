import { LayoutMain } from "../layout-main/layout-main";
import styles from "./layout-form.module.scss";

export const LayoutForm = ({ children }) => (
  <LayoutMain>
    <div className={styles.formContainer}>
      <main className={styles.main}>{children}</main>
    </div>
  </LayoutMain>
);
