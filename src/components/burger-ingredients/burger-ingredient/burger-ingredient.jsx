import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.scss";
import { ingredientWithQty } from "../../../utils/prop-types";

export const BugerIngredient = ({
  image,
  image_mobile,
  image_large,
  name,
  price,
  qty,
}) => (
  <section className={styles.container}>
    <img
      srcSet={`${image_mobile} 1x, ${image} 2x, ${image_large} 3x`}
      alt={name}
      className={styles.image}
      width={240}
      height={120}
    />
    <div className={styles.price}>
      {price} <CurrencyIcon type="primary" />
    </div>
    <div>{name}</div>
    {qty && <Counter count={qty} extraClass={styles.qty} />}
  </section>
);

BugerIngredient.propTypes = ingredientWithQty;
