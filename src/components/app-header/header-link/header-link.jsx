import styles from "./header-link.module.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../utils";

export const HeaderLink = ({ Icon, label, to }) => (
  <NavLink className={styles.link} to={to}>
    {({ isActive }) => (
      <>
        <div className={styles.link_icon}>
          <Icon type={isActive ? "primary" : "secondary"} />
        </div>
        <div className={isActive ? styles.active : null}>{label}</div>
      </>
    )}
  </NavLink>
);

HeaderLink.propTypes = {
  Icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.oneOf(Object.values(ROUTES)).isRequired,
};
