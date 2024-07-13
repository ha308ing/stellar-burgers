import { Link } from "react-router-dom";
import { Logo as LogoTitle } from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "utils";
import { withMobile } from "hocs";
import styles from "./link-logo.module.scss";
import type { FC } from "react";

const LogoNoTitle: FC = () => (
  <img className={styles.logo} src="/logo.svg" alt="Stellar Burgers" />
);

const Logo = withMobile(LogoTitle, LogoNoTitle);

export const LinkLogo: FC = () => {
  return (
    <Link to={ROUTES.ROOT} title="Stellar Burgers">
      <Logo />
    </Link>
  );
};
