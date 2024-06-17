import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderLink } from "./header-link/header-link";
import styles from "./app-header.module.scss";
import { ROUTES } from "../../utils";
import { selectName } from "../../services/profile";
import { useSelector } from "react-redux";

export const AppHeader = () => {
  const name = useSelector(selectName);
  const profileLinkLabel = name || "Личный кабинет";

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftNav}>
          <HeaderLink
            Icon={BurgerIcon}
            label="Конструктор"
            isActive={true}
            to={ROUTES.ROOT}
          />
          <HeaderLink
            Icon={ListIcon}
            label="Лента заказов"
            to={ROUTES.ORDERS_FEED}
          />
        </div>
        <div className={styles.rightNav}>
          <HeaderLink
            Icon={ProfileIcon}
            label={profileLinkLabel}
            to={ROUTES.PROFILE}
          />
        </div>
        <div className={styles.centerNav}>
          <Logo />
        </div>
      </nav>
    </header>
  );
};
