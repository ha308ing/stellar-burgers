import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./burger-ingredients-tabs.module.scss";
import PropTypes from "prop-types";

export class BurgerIngredientsTabs extends React.Component {
  state = {
    activeTab: null,
  };

  render() {
    const { groups, clickHandler } = this.props;

    return (
      <section className={styles.container}>
        {groups.map((group, index) => (
          <Tab
            key={index}
            value={group}
            active={this.state.activeTab === index}
            onClick={() => {
              this.setState({ activeTab: index });
              clickHandler(index);
            }}
          >
            {group}
          </Tab>
        ))}
      </section>
    );
  }
}

BurgerIngredientsTabs.propTypes = {
  group: PropTypes.string,
  activeGroupIndex: PropTypes.number,
  clickHandler: PropTypes.func,
};
