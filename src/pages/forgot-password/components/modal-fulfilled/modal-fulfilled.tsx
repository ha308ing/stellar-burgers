import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalFulfilled as Modal } from "components";
import styles from "./modal-fulfilled.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { formPasswordForgotActions } from "services";
import { useAppDispatch } from "hooks";
import type { IUserData } from "utils";
import { ROUTES } from "utils";
import type { FC } from "react";

interface IProps {
  email: IUserData["email"];
}

export const ModalFulfilled: FC<IProps> = ({ email }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
    dispatch(formPasswordForgotActions.resetMessage());
    dispatch(formPasswordForgotActions.resetInputs());
    navigate(ROUTES.RESET_PASSWORD, {
      state: { from: location.pathname },
      replace: true,
    });
  };

  return (
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
};
