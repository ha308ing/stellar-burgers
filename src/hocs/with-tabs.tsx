import { useState } from "react";
import type { FC } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./with-tabs.module.scss";

export const withTabs: (
  tabTitles: string[],
) => FC<{ children: React.ReactNode[] }> =
  (tabTitles) =>
  ({ children }) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const handleClick = (tabIndex: number) => {
      setActiveTabIndex(tabIndex);
    };

    const childrenFiltered = children.map((child, index) =>
      index === activeTabIndex ? child : null,
    );

    const tabs = tabTitles.map((tabTitle, index) => (
      <Tab
        key={index}
        value={tabTitle}
        active={index === activeTabIndex}
        onClick={() => handleClick(index)}
      >
        {tabTitle}
      </Tab>
    ));

    return (
      <section>
        <div className={styles.tabs}>{tabs}</div>
        {childrenFiltered}
      </section>
    );
  };
