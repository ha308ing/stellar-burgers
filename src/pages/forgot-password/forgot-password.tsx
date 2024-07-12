import { LayoutForm as LF, ModalRejected, ModalPending } from "components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES, STATUSES } from "utils";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  formPasswordForgotActions,
  selectFormPasswordForgot,
} from "services/forms/form-password-forgot";
import {
  dispatchFormAction,
  dispatchInputAction,
} from "utils/dispatch-actions";
import { ModalFulfilled } from "./components";
import type { FC } from "react";
import type { IFormPasswordForgotState } from "services/forms/form-password-forgot/initial-state";

export const ForgotPasswordPage: FC = () => {
  const {
    inputs: { email },
    message,
    status,
  } = useAppSelector(selectFormPasswordForgot);
  const dispatch = useAppDispatch();

  const handleChange = dispatchInputAction(
    dispatch,
    formPasswordForgotActions.change,
  );

  const handleSubmit = dispatchFormAction<IFormPasswordForgotState>(
    dispatch,
    formPasswordForgotActions.submit,
  )({ email });

  const closeModal = () => {
    dispatch(formPasswordForgotActions.resetMessage());
  };

  return (
    <>
      {status === STATUSES.PENDING && (
        <ModalPending>отправляем код на почту {email}</ModalPending>
      )}
      {status === STATUSES.REJECTED && (
        <ModalRejected closeModalHandler={closeModal}>{message}</ModalRejected>
      )}
      {status === STATUSES.FULFILLED && <ModalFulfilled email={email} />}
      <LF>
        <LF.Heading>Восстановление пароля</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <EmailInput
            name="email"
            placeholder="Укажите e-mail"
            value={email}
            onChange={handleChange}
          />
          <LF.Button>Восстановить</LF.Button>
        </LF.Form>
        <LF.Footer>
          <LF.FooterString>
            Вспомнили пароль?{" "}
            <LF.FooterLink to={ROUTES.LOGIN}>Войти</LF.FooterLink>
          </LF.FooterString>
        </LF.Footer>
      </LF>
    </>
  );
};
