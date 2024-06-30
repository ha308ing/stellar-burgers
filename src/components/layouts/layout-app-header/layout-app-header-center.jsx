import styles from "./layout-app-header-part.module.scss";

export const LayoutAppHeaderCenter = ({ children }) => {
  return <div className={styles.centerNav}>{children}</div>;
};
