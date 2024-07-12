import { LayoutForm as LF, ModalRejected, ModalPending } from "components";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  ROUTES,
  STATUSES,
  dispatchFormAction,
  dispatchInputAction,
} from "utils";
import { useAppDispatch, useAppSelector } from "hooks";
import { formPasswordResetActions, selectFormPasswordReset } from "services";
import type { FC } from "react";
import { IFormPasswordResetState } from "services";

export const ResetPasswordPage: FC = () => {
  const {
    inputs: { password, token },
    message,
    status,
  } = useAppSelector(selectFormPasswordReset);
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch(formPasswordResetActions.resetMessage());
  };

  const handleChange = dispatchInputAction(
    dispatch,
    formPasswordResetActions.change,
  );

  const handleSubmit = dispatchFormAction<IFormPasswordResetState>(
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
