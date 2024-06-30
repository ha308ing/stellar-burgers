import {
  ArrowDownIcon,
  ArrowUpIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./submenu-icon.module.scss";

export const SubmenuIcon = ({ isUp, clickHandler }) => {
  const icon = isUp ? <ArrowUpIcon /> : <ArrowDownIcon />;
  const title = isUp ? "Свернуть" : "Развернуть";

  return (
    <div onClick={clickHandler} className={styles.submenuIcon} title={title}>
      {icon}
    </div>
  );
};

SubmenuIcon.propTypes = {
  isUp: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
