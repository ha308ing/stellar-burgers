import {
  ArrowDownIcon,
  ArrowUpIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./submenu-icon.module.scss";
import type { FC, MouseEventHandler } from "react";

interface IProps {
  isUp?: boolean;
  clickHandler?: MouseEventHandler<HTMLDivElement>;
}

export const SubmenuIcon: FC<IProps> = ({ isUp, clickHandler }) => {
  const icon = isUp ? (
    <ArrowUpIcon type="primary" />
  ) : (
    <ArrowDownIcon type="primary" />
  );
  const title = isUp ? "Свернуть" : "Развернуть";

  return (
    <div onClick={clickHandler} className={styles.submenuIcon} title={title}>
      {icon}
    </div>
  );
};
