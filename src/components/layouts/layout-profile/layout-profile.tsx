import { LayoutMain } from "components/layouts";
import { LayoutProfileNav } from "./layout-profile-nav/layout-profile-nav";
import styles from "./layout-profile.module.scss";
import type { FC, PropsWithChildren } from "react";

export const LayoutProfile: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutMain>
      <main className={styles.container}>
        <LayoutProfileNav />
        {children}
      </main>
    </LayoutMain>
  );
};
