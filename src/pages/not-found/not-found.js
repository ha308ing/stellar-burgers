import { useNavigate } from "react-router-dom";
import { LayoutMain } from "../../components";
import styles from "./not-found.module.scss";
import { ROUTES } from "../../utils";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <LayoutMain>
      <div className={styles.container}>
        <h1 className={styles.heading}>Это где-то не здесь</h1>
        <img
          src="/astronaut.png"
          alt="waiting astronaut"
          className={styles.image}
        />
        <Button
          htmlType="button"
          onClick={() => {
            navigate(ROUTES.ROOT, { replace: true });
          }}
        >
          На главную
        </Button>
      </div>
    </LayoutMain>
  );
};
