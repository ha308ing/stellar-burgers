import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-tabs.module.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectGroups } from "../../../services/ingredients";
import { selectActiveTabIndex } from "../../../services/ingredients-tabs";

export const BurgerIngredientsTabs = ({ clickHandler }) => {
  const groups = useSelector(selectGroups);
  const activeTabIndex = useSelector(selectActiveTabIndex);

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

BurgerIngredientsTabs.propTypes = {
  clickHandler: PropTypes.func,
};
