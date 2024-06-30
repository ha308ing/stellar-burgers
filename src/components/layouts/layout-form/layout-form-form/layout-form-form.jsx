import styles from "./layout-form-form.module.scss";
import PropTypes from "prop-types";

export const LayoutFormForm = ({ children, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

LayoutFormForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
