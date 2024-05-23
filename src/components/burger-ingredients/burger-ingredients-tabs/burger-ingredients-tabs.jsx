import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./burger-ingredients-tabs.module.scss";
import PropTypes from "prop-types";

export const BurgerIngredientsTabs = ({ groups, clickHandler }) => {
  const [activeTab, setActiveTab] = useState();

  return (
    <section className={styles.container}>
      {groups.map((group, index) => (
        <Tab
          key={index}
          value={group}
          active={activeTab === index}
          onClick={() => {
            setActiveTab(index);
            clickHandler(index);
          }}
        >
          {group}
        </Tab>
      ))}
    </section>
  );
};

BurgerIngredientsTabs.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  clickHandler: PropTypes.func,
};
