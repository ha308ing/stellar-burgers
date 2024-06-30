import styles from "./layout-profile-nav.module.scss";
import { LayoutProfileMenu } from "../layout-profile-menu/layout-profile-menu";

export const LayoutProfileNav = () => {
  return (
    <nav className={styles.nav}>
      <LayoutProfileMenu />
    </nav>
  );
};
