import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./burger-ingredients-tabs.module.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectGroups } from "../../../services/ingredients";

export const BurgerIngredientsTabs = ({ clickHandler }) => {
  const groups = useSelector(selectGroups);
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
  clickHandler: PropTypes.func,
};
