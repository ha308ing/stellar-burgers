import { FC, PropsWithChildren, FormEventHandler } from "react";
import styles from "./layout-form-form.module.scss";

interface IProps extends PropsWithChildren {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const LayoutFormForm: FC<IProps> = ({ children, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
