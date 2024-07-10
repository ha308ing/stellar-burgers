import { FC, PropsWithChildren } from "react";
import styles from "./layout-app-header-part.module.scss";

export const LayoutAppHeaderRight: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.rightNav}>{children}</div>;
};
