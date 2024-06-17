import styles from "./ingredient-details.module.scss";
import { selectIngredient } from "../../services/ingredient";
import { useSelector } from "react-redux";

export const IngredientDetails = () => {
  const ingredient = useSelector(selectIngredient);

  const { image_large, name, calories, proteins, fat, carbohydrates } =
    ingredient;

  return (
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
};
