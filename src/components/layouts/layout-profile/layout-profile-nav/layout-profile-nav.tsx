import styles from "./layout-profile-nav.module.scss";
import { ProfileMenu } from "components/profile-menu/profile-menu";
import type { FC } from "react";

export const LayoutProfileNav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ProfileMenu />
    </nav>
  );
};
