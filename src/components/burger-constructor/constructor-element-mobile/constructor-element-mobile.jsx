import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-mobile.module.scss";
import PropTypes from "prop-types";

// TODO: add swipe to remove
export const ConstructorElementMobile = ({ price, text, thumbnail }) => {
  return (
    <div className={styles.constructorElementMobile}>
      <img src={thumbnail} alt={text} className={styles.image} />
      <div className={styles.name}>{text}</div>
      <div className={styles.price}>
        {price}
        <CurrencyIcon />
      </div>
    </div>
  );
};

ConstructorElementMobile.propTypes = {
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
