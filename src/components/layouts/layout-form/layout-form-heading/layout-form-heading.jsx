import styles from "./layout-form-heading.module.scss";

export const LayoutFormHeading = ({ children }) => (
  <h1 className={styles.heading}>{children}</h1>
);
