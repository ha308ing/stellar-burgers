import styles from "./layout-app-header-part.module.scss";

export const LayoutAppHeaderRight = ({ children }) => {
  return <div className={styles.rightNav}>{children}</div>;
};
