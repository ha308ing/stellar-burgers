import type { FC, ReactNode } from "react";
import { useState } from "react";
import styles from "./menu-item.module.scss";
import { SubmenuIcon } from "./submenu-icon";

interface IProps {
  link: ReactNode;
  submenu?: ReactNode;
}

export const MenuItem: FC<IProps> = ({ link, submenu = null }) => {
  const [isVisible, setIsVisible] = useState(submenu != null);

  const toggleIsVisible = () => {
    if (submenu) setIsVisible(!isVisible);
  };

  return (
    <>
      <li className={styles.menuItem}>
        {link}
        {submenu && (
          <SubmenuIcon isUp={isVisible} clickHandler={toggleIsVisible} />
        )}
      </li>
      {isVisible && <div className={styles.submenu}>{submenu}</div>}
    </>
  );
};
