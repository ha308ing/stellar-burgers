import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalFulfilled as Modal } from "../../../../components";
import styles from "./modal-fulfilled.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { formPasswordForgotActions } from "../../../../services/forms/form-password-forgot";
import { useDispatch } from "react-redux";
import { ROUTES } from "../../../../utils";
import PropTypes from "prop-types";

export const ModalFulfilled = ({ email }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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

ModalFulfilled.propTypes = {
  email: PropTypes.string.isRequired,
};
