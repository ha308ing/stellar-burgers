import styles from "./header-link.module.scss";
import PropTypes from "prop-types";

export const HeaderLink = ({ Icon, label, isActive }) => (
  <a
    className={`${styles.link} ${isActive ? "text_color_primary" : "text_color_inactive"}`}
    href="/"
  >
    <div className={styles.link_icon}>
      <Icon type={isActive ? "primary" : "secondary"} />
    </div>
    <div className={styles.link_label}>{label}</div>
  </a>
);

HeaderLink.propTypes = {
  Icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
