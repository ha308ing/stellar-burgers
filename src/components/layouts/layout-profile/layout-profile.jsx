import { LayoutMain } from "../layout-main/layout-main";
import { LayoutProfileNav } from "./layout-profile-nav/layout-profile-nav";
import styles from "./layout-profile.module.scss";

export const LayoutProfile = ({ children }) => {
  return (
    <LayoutMain>
      <main className={styles.container}>
        <LayoutProfileNav />
        {children}
      </main>
    </LayoutMain>
  );
};
