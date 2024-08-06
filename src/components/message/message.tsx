import type { FC } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./message.module.scss";

interface IProps {
  message: string;
  clickHandler?: () => void;
  buttonText?: string;
}

export const Message: FC<IProps> = ({ message, clickHandler, buttonText }) => (
  <section className={styles.container}>
    <h1 className={styles.message}>{message}</h1>
    {!!clickHandler && (
      <Button type="primary" htmlType="button" onClick={clickHandler}>
        {buttonText}
      </Button>
    )}
  </section>
);
