import styles from "./layout-profile-footer.module.scss";
import type { FC, PropsWithChildren } from "react";

export const LayoutProfileFooter: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.footer}>{children}</div>
);
