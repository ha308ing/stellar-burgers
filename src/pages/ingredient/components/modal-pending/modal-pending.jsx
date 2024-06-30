import { useNavigate } from "react-router-dom";
import styles from "./modal-pending.module.scss";
import { ModalPending as Modal } from "../../../../components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "../../../../utils";

export const ModalPending = () => {
  const navigate = useNavigate();

  return (
    <Modal>
      <div className={styles.modalPendingText}>грузим ингридиент</div>
      <Button
        htmlType="button"
        onClick={() => {
          navigate(ROUTES.ROOT);
        }}
      >
        На главную
      </Button>
    </Modal>
  );
};
