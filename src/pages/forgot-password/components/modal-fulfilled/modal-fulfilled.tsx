import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalFulfilled as Modal } from "components";
import styles from "./modal-fulfilled.module.scss";
import type { IUserData } from "utils";
import type { FC } from "react";

interface IProps {
  email: IUserData["email"];
  closeModalHandler: () => void;
}

export const ModalFulfilled: FC<IProps> = ({ email, closeModalHandler }) => (
  <Modal closeModalHandler={closeModalHandler}>
    <div className={styles.modalFulfilled}>
      <div>На почту {email} отправлен код.</div>
      <div>Он нужен для сброса пароля.</div>
      <Button
        onClick={closeModalHandler}
        extraClass={styles.button}
        htmlType="button"
      >
        К сбросу пароля
      </Button>
    </div>
  </Modal>
);
