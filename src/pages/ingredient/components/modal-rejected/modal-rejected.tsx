import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalRejected as Modal } from "../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./modal-rejected.module.scss";
import { ROUTES } from "../../../../utils";
import type { FC } from "react";

export const ModalRejected: FC = () => {
  const navigate = useNavigate();
  const { ingredientId } = useParams();

  const handleModalClose = () => {
    navigate(ROUTES.ROOT);
  };

  return (
    <Modal closeModalHandler={handleModalClose}>
      <div className={styles.container}>
        <p>ингредиент {ingredientId} не найден</p>
        <Button htmlType="button" onClick={handleModalClose}>
          На главную
        </Button>
      </div>
    </Modal>
  );
};
