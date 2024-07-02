import styles from "./layout-form-button.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const LayoutFormButton = ({
  children,
  type = "submit",
  disabled = false,
}) => (
  <Button extraClass={styles.button} disabled={disabled} htmlType={type}>
    {children}
  </Button>
);

LayoutFormButton.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  disabled: PropTypes.bool,
};
