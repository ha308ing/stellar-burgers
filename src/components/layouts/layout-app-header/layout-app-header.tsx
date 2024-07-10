import { FC, PropsWithChildren } from "react";
import styles from "./layout-app-header.module.scss";

export const LayoutAppHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>{children}</nav>
    </header>
  );
};
