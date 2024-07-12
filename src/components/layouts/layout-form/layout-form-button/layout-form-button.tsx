import type { FC, PropsWithChildren, ComponentProps } from "react";
import styles from "./layout-form-button.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

interface IProps extends PropsWithChildren {
  type?: ComponentProps<"button">["type"];
  disabled?: boolean;
}

export const LayoutFormButton: FC<IProps> = ({
  children,
  type = "submit",
  disabled = false,
}) => (
  <Button extraClass={styles.button} disabled={disabled} htmlType={type}>
    {children}
  </Button>
);
