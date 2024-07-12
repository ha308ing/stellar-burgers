import type { FC, PropsWithChildren } from "react";
import { LayoutMain } from "components/layouts";
import styles from "./layout-form.module.scss";

export const LayoutForm: FC<PropsWithChildren> = ({ children }) => (
  <LayoutMain>
    <div className={styles.formContainer}>
      <main className={styles.main}>{children}</main>
    </div>
  </LayoutMain>
);
