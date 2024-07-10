import styles from "./layout-profile-nav.module.scss";
import { LayoutProfileMenu } from "../layout-profile-menu/layout-profile-menu";
import type { FC } from "react";

export const LayoutProfileNav: FC = () => {
  return (
    <nav className={styles.nav}>
      <LayoutProfileMenu />
    </nav>
  );
};
