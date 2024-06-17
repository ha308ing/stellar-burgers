import styles from "./layout-profile-content.module.scss";

export const LayouProfileContent = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
