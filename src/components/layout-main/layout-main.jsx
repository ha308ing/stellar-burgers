import { AppHeader } from "../app-header/app-header";
import styles from "./layout-main.module.scss";

export const LayoutMain = ({ children }) => {
  return (
    <section className={styles.container}>
      <AppHeader />
      <div className={styles.mainContainer}>{children}</div>
    </section>
  );
};
