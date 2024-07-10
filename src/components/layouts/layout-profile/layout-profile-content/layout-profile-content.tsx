import styles from "./layout-profile-content.module.scss";
import type { FC, PropsWithChildren } from "react";

export const LayouProfileContent: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
