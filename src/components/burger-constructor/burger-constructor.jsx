import styles from "./burger-constructor.module.scss";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ButtonCheckoutOrder } from "./button-checkout/button-checkout-order";
import { useDispatch, useSelector } from "react-redux";
import {
  burgerConstructorActions,
  selectBurger,
  selectBurgerTotal,
} from "../../services/burger-constructor";

export const BurgerConstructor = () => {
  const { bun = null, inner = [] } = useSelector(selectBurger);
  const total = useSelector(selectBurgerTotal);
  const dispatch = useDispatch();

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
            handleClose={() =>
              dispatch(
                burgerConstructorActions.removeIngredient(bun.internalId),
              )
            }
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
                  handleClose={() =>
                    dispatch(
                      burgerConstructorActions.removeIngredient(
                        ingredient.internalId,
                      ),
                    )
                  }
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
            handleClose={() =>
              dispatch(
                burgerConstructorActions.removeIngredient(bun.internalId),
              )
            }
          />
        )}
      </div>
      <div className={styles.summary}>
        <div className={styles.total}>
          {total} <CurrencyIcon type="primary" />
        </div>
        <ButtonCheckoutOrder />
      </div>
    </section>
  );
};
