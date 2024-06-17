import styles from "./layout-form-footer-link.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LayoutFormFooterLink = ({ children, to, replace = false }) => (
  <Link className={styles.footerLink} to={to} replace={replace}>
    {children}
  </Link>
);

LayoutFormFooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  replace: PropTypes.bool,
};
