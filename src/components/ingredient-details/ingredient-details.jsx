import PropTypes from "prop-types";
import styles from "./ingredient-details.module.scss";

export const IngredientDetails = ({
  image_large,
  name,
  calories,
  proteins,
  fat,
  carbohydrates,
}) => (
  <section className={styles.container}>
    <h1 className={styles.title}>Детали ингридиента</h1>
    <div className={styles.smallerWidth}>
      <img src={image_large} className={styles.image} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <ul className={styles.details}>
        <li className={styles.detailsItem}>
          <div className={styles.detailsItem_title}>Калории, ккал</div>
          <div className={styles.detailsItem_value}>{calories}</div>
        </li>
        <li className={styles.detailsItem}>
          <div className={styles.detailsItem_title}>Белки, г</div>
          <div className={styles.detailsItem_value}>{proteins}</div>
        </li>
        <li className={styles.detailsItem}>
          <div className={styles.detailsItem_title}>Жиры, г</div>
          <div className={styles.detailsItem_value}>{fat}</div>
        </li>
        <li className={styles.detailsItem}>
          <div className={styles.detailsItem_title}>Углеводы, г</div>
          <div className={styles.detailsItem_value}>{carbohydrates}</div>
        </li>
      </ul>
    </div>
  </section>
);

IngredientDetails.propTypes = {
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};
