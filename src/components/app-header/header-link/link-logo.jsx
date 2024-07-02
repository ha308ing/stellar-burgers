import { Link } from "react-router-dom";
import { Logo as LogoTitle } from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "../../../utils";
import { withMobile } from "../../../hocs/withMobile";
import styles from "./link-logo.module.scss";

const LogoNoTitle = () => (
  <img className={styles.logo} src="/logo.svg" alt="Stellar Burgers" />
);

const Logo = withMobile(LogoTitle, LogoNoTitle);

export const LinkLogo = () => {
  return (
    <Link to={ROUTES.ROOT} title="Stellar Burgers">
      <Logo />
    </Link>
  );
};
