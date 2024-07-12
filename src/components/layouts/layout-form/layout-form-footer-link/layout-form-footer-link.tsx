import type { FC, PropsWithChildren } from "react";
import styles from "./layout-form-footer-link.module.scss";
import { Link } from "react-router-dom";
import type { TRoutes } from "utils";

interface IProps extends PropsWithChildren {
  to: TRoutes;
  replace?: boolean;
}

export const LayoutFormFooterLink: FC<IProps> = ({
  children,
  to,
  replace = false,
}) => (
  <Link className={styles.footerLink} to={to} replace={replace}>
    {children}
  </Link>
);
