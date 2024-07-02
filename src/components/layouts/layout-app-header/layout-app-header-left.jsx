import styles from "./layout-app-header-part.module.scss";

export const LayoutAppHeaderLeft = ({ children }) => {
  return <div className={styles.leftNav}>{children}</div>;
};
