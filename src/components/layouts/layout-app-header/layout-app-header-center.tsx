import { FC, PropsWithChildren } from "react";
import styles from "./layout-app-header-part.module.scss";

export const LayoutAppHeaderCenter: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.centerNav}>{children}</div>;
};
