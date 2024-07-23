import type { FC, PropsWithChildren } from "react";
import styles from "./layout-app-header-part.module.scss";

export const LayoutAppHeaderLeft: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.leftNav}>{children}</div>;
};
