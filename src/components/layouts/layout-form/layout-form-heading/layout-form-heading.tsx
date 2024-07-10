import { FC, PropsWithChildren } from "react";
import styles from "./layout-form-heading.module.scss";

export const LayoutFormHeading: FC<PropsWithChildren> = ({ children }) => (
  <h1 className={styles.heading}>{children}</h1>
);
