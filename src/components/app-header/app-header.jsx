import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { HeaderLink } from "./header-link/header-link";
import styles from "./app-header.module.scss";

export class AppHeader extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.leftNav}>
            <HeaderLink
              Icon={BurgerIcon}
              href="#"
              label="Конструктор"
              isActive={true}
            />
            <HeaderLink Icon={ListIcon} href="#" label="Лента заказов" />
          </div>
          <div className={styles.rightNav}>
            <HeaderLink Icon={ProfileIcon} href="#" label="Личный кабинет" />
          </div>
          <div className={styles.centerNav}>
            <Logo />
          </div>
        </nav>
        <h1 className={styles.heading}>Соберите бургер</h1>
      </header>
    );
  }
}
