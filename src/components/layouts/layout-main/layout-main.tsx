import type { FC, PropsWithChildren } from "react";
import { AppHeader } from "components";
import styles from "./layout-main.module.scss";

export const LayoutMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={styles.container}>
      <AppHeader />
      {children}
    </section>
  );
};
