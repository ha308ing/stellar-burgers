import styles from "./layout-app-header.module.scss";

export const LayoutAppHeader = ({ children }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>{children}</nav>
    </header>
  );
};
