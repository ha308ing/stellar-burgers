import { FC } from "react";
import { LayoutForm as LF, ModalRejected } from "components";
import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES, STATUSES } from "utils";
import { loginActions, selectFormLogin } from "services/forms/form-login";
import { Navigate } from "react-router-dom";
import {
  dispatchFormAction,
  dispatchInputAction,
} from "utils/dispatch-actions";
import { useAppDispatch, useAppSelector } from "hooks";
import { IFormLogin } from "services/forms/form-login/initial-state";

export const LoginPage: FC = () => {
  const {
    inputs: { email, password },
    status,
    message,
  } = useAppSelector(selectFormLogin);
  const dispatch = useAppDispatch();

  const handleSubmit = dispatchFormAction<IFormLogin>(
    dispatch,
    loginActions.submit,
  )({ email, password });

  const handleChange = dispatchInputAction(dispatch, loginActions.change);

  const handeModalClose = () => {
    dispatch(loginActions.resetMessage());
  };

  const isPending = status === STATUSES.PENDING;

  const buttonText = isPending ? "Заходим..." : "Войти";

  const isButtonDisabled = isPending;

  return (
    <>
      {status === STATUSES.FULFILLED && (
        <Navigate to={ROUTES.ROOT} replace={true} />
      )}
      {status === STATUSES.REJECTED && (
        <ModalRejected closeModalHandler={handeModalClose}>
          {message}
        </ModalRejected>
      )}
      <LF>
        <LF.Heading>Вход</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <EmailInput name="email" value={email} onChange={handleChange} />
          <PasswordInput
            name="password"
            value={password}
            onChange={handleChange}
          />
          <LF.Button disabled={isButtonDisabled}>{buttonText}</LF.Button>
        </LF.Form>
        <LF.Footer>
          <>
            <LF.FooterString>
              Вы - новый пользователь?{" "}
              <LF.FooterLink to={ROUTES.REGISTER}>
                Зарегистрироваться
              </LF.FooterLink>
            </LF.FooterString>
            <LF.FooterString>
              Забыли пароль?{" "}
              <LF.FooterLink to={ROUTES.FORGOT_PASSWORD}>
                Восстановить пароль
              </LF.FooterLink>
            </LF.FooterString>
          </>
        </LF.Footer>
      </LF>
    </>
  );
};
