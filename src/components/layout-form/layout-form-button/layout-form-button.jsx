import styles from "./layout-form-button.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const LayoutFormButton = ({ children, type = "submit" }) => (
  <Button extraClass={styles.button} htmlType={type}>
    {children}
  </Button>
);

LayoutFormButton.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
};
