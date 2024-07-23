import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-tabs.module.scss";
import { useAppSelector } from "hooks";
import { selectGroups, selectActiveTabIndex } from "services";
import type { FC } from "react";

interface IProps {
  clickHandler: (index: number) => void;
}

export const BurgerIngredientsTabs: FC<IProps> = ({ clickHandler }) => {
  const groups = useAppSelector(selectGroups);
  const activeTabIndex = useAppSelector(selectActiveTabIndex);

  return (
    <section className={styles.container}>
      {groups.map((group, index) => (
        <Tab
          key={index}
          value={group}
          active={index === activeTabIndex}
          onClick={() => {
            clickHandler(index);
          }}
        >
          {group}
        </Tab>
      ))}
    </section>
  );
};
