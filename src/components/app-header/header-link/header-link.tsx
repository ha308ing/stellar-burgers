import styles from "./header-link.module.scss";
import { NavLink } from "react-router-dom";
import type { TRoutes } from "utils";
import type { FC } from "react";
import type { TIconProps } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

interface IProps {
  Icon: React.ComponentType<TIconProps>;
  label: string;
  to: TRoutes;
  title?: string;
}

export const HeaderLink: FC<IProps> = ({ Icon, label, to, title }) => (
  <NavLink className={styles.link} to={to} title={title ?? label}>
    {({ isActive }) => (
      <>
        <div className={styles.link_icon}>
          <Icon type={isActive ? "primary" : "secondary"} />
        </div>
        <div className={isActive ? styles.active : undefined}>{label}</div>
      </>
    )}
  </NavLink>
);
