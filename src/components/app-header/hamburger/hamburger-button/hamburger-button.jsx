import { MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./hamburger-button.module.scss";
import PropTypes from "prop-types";

export const HamburgerButton = ({ handleClick }) => {
  return (
    <div className={styles.hamburgerButton} onClick={handleClick} title="Меню">
      <MenuIcon type="primary" />
    </div>
  );
};

HamburgerButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
