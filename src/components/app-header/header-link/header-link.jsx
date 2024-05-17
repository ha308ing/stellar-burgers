import React from "react";
import styles from "./header-link.module.scss";
import PropTypes from "prop-types";

export class HeaderLink extends React.Component {
  handleLinkClick = (event) => {
    event.preventDefault();
  };

  render() {
    const { href, Icon, label, isActive } = this.props;

    return (
      <a
        className={`${styles.link} ${isActive ? "text_color_primary" : "text_color_inactive"}`}
        href={href}
        onClick={this.handleLinkClick}
      >
        <div className={styles.link_icon}>
          <Icon type={isActive ? "primary" : "secondary"} />
        </div>
        <div className={styles.link_label}>{label}</div>
      </a>
    );
  }
}

HeaderLink.propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
