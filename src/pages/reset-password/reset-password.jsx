import {
  LayoutForm as LF,
  ModalRejected,
  ModalPending,
} from "../../components";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES, STATUSES } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  formPasswordResetActions,
  selectFormPasswordReset,
} from "../../services/forms/form-password-reset";
import {
  dispatchFormAction,
  dispatchInputAction,
} from "../../utils/dispatch-actions";

export const ResetPasswordPage = () => {
  const {
    inputs: { password, token },
    message,
    status,
  } = useSelector(selectFormPasswordReset);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(formPasswordResetActions.resetMessage());
  };

  const handleChange = dispatchInputAction(
    dispatch,
    formPasswordResetActions.change,
  );

  const handleSubmit = dispatchFormAction(
    dispatch,
    formPasswordResetActions.submit,
  )({ password, token });

  return (
    <>
      {status === STATUSES.PENDING && (
        <ModalPending>сбрасываем пароль</ModalPending>
      )}
      {status === STATUSES.REJECTED && (
        <ModalRejected closeModalHandler={handleModalClose}>
          {message}
        </ModalRejected>
      )}
      <LF>
        <LF.Heading>Восстановление пароля</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <PasswordInput
            name="password"
            placeholder="Введите новый пароль"
            value={password}
            onChange={handleChange}
          />
          <Input
            name="token"
            placeholder="Введите код из письма"
            value={token}
            onChange={handleChange}
          />
          <LF.Button>Сохранить</LF.Button>
        </LF.Form>
        <LF.Footer>
          <LF.FooterString>
            Вспомнили пароль?{" "}
            <LF.FooterLink to={ROUTES.LOGIN}>Войти</LF.FooterLink>
          </LF.FooterString>
          <LF.FooterString>
            Нет кода?{" "}
            <LF.FooterLink to={ROUTES.FORGOT_PASSWORD}>
              Запросить новый
            </LF.FooterLink>
          </LF.FooterString>
        </LF.Footer>
      </LF>
    </>
  );
};
