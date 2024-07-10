import { MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./hamburger-button.module.scss";
import PropTypes from "prop-types";
import type { FC } from "react";

interface IProps {
  handleClick: () => void;
}

export const HamburgerButton: FC<IProps> = ({ handleClick }) => {
  return (
    <div className={styles.hamburgerButton} onClick={handleClick} title="Меню">
      <MenuIcon type="primary" />
    </div>
  );
};

HamburgerButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
