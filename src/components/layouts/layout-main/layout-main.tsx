import type { FC, PropsWithChildren } from "react";
import { AppHeader } from "components/app-header";
import styles from "./layout-main.module.scss";

interface IProps extends PropsWithChildren {
  title?: string;
}

export const LayoutMain: FC<IProps> = ({ children, title }) => {
  return title ? (
    <section className={styles.container}>
      <AppHeader />
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.main}>{children}</div>
      </div>
    </section>
  ) : (
    <section className={styles.container}>
      <AppHeader />
      {children}
    </section>
  );
};
