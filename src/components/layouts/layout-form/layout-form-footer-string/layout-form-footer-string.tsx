import type { FC, PropsWithChildren } from "react";
import styles from "./layout-form-footer-string.module.scss";

export const LayoutFormFooterString: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.footerString}>{children}</div>
);
