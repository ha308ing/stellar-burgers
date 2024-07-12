import { LayoutForm as LF, ModalRejected } from "components";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  ROUTES,
  STATUSES,
  dispatchFormAction,
  dispatchInputAction,
} from "utils";
import { useAppDispatch, useAppSelector } from "hooks";
import { registerActions, selectFormRegister } from "services";
import { Navigate } from "react-router-dom";
import type { FC } from "react";
import type { IFormRegisterState } from "services";

export const RegisterPage: FC = () => {
  const {
    inputs: { name, email, password },
    status,
    message,
  } = useAppSelector(selectFormRegister);
  const dispatch = useAppDispatch();

  const handleSubmit = dispatchFormAction<IFormRegisterState>(
    dispatch,
    registerActions.submit,
  )({ name, email, password });

  const handleChange = dispatchInputAction(dispatch, registerActions.change);

  const handeModalClose = () => {
    dispatch(registerActions.resetMessage());
  };

  const buttonText =
    status === STATUSES.PENDING ? "Регистрируемся..." : "Зарегистрироваться";

  const isButtonDisabled = status === STATUSES.PENDING;

  return (
    <>
      {status === STATUSES.REJECTED && (
        <ModalRejected closeModalHandler={handeModalClose}>
          {message}
        </ModalRejected>
      )}
      {status === STATUSES.FULFILLED && (
        <Navigate to={ROUTES.ROOT} replace={true} />
      )}
      <LF>
        <LF.Heading>Регистрация</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Имя"
            value={name}
            onChange={handleChange}
          />
          <EmailInput name="email" value={email} onChange={handleChange} />
          <PasswordInput
            name="password"
            value={password}
            onChange={handleChange}
          />
          <LF.Button disabled={isButtonDisabled}>{buttonText}</LF.Button>
        </LF.Form>
        <LF.Footer>
          <LF.FooterString>
            Уже зарегистрированы?{" "}
            <LF.FooterLink to={ROUTES.LOGIN} replace={true}>
              Войти
            </LF.FooterLink>
          </LF.FooterString>
        </LF.Footer>
      </LF>
    </>
  );
};
