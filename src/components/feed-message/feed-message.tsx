import type { FC } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-message.module.scss";

interface IProps {
  message: string;
  clickHandler?: () => void;
}

export const FeedMessage: FC<IProps> = ({ message, clickHandler }) => (
  <section className={styles.container}>
    <h1 className={styles.message}>{message}</h1>
    {!!clickHandler && (
      <Button type="primary" htmlType="button" onClick={clickHandler}>
        Попробовать снова
      </Button>
    )}
  </section>
);
