import React from "react";
import styles from "./burger-constructor.module.scss";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientWithQtyShape } from "../../utils/prop-types";

export class BurgerConstructor extends React.Component {
  render() {
    const { bun = null, inner = [] } = this.props.order;

    const ingredients = [bun, ...inner];

    const total = ingredients.reduce((total, ingredient) => {
      if (ingredient == null) return total;
      const { type, price } = ingredient;
      const isBun = type === "bun";
      return (total += isBun ? price * 2 : price);
    }, 0);

    return (
      <section className={styles.container}>
        <div className={styles.ingredients}>
          {bun ? (
            <ConstructorElement
              price={bun.price}
              text={bun.name + " (верх)"}
              thumbnail={bun.image}
              type="top"
              isLocked={true}
              extraClass={styles.bunIngredient}
            />
          ) : (
            <div className={styles.noIngredients}>Выберете булку</div>
          )}
          <div className={styles.innerIngredients}>
            {inner.length > 0 &&
              inner.map((ingredient, index) => (
                <div className={styles.ingredient} key={ingredient._id + index}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    price={ingredient.price}
                    text={ingredient.name}
                    thumbnail={ingredient.image}
                    key={ingredient._id}
                    isLocked={false}
                  />
                </div>
              ))}
          </div>

          {inner.length < 1 && (
            <div className={styles.noIngredients}>Выберете начинки и соусы</div>
          )}

          {bun && (
            <ConstructorElement
              price={bun.price}
              text={bun.name + " (низ)"}
              thumbnail={bun.image}
              type="bottom"
              isLocked={true}
              extraClass={styles.bunIngredient}
            />
          )}
        </div>
        <div className={styles.summary}>
          <div className={styles.total}>
            {total} <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="medium" htmlType="button">
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }
}

BurgerConstructor.propTypes = {
  order: PropTypes.shape({
    bun: ingredientWithQtyShape.isRequired,
    inner: PropTypes.arrayOf(ingredientWithQtyShape).isRequired,
  }),
};
