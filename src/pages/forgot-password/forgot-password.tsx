import { LayoutForm as LF, ModalRejected, ModalPending } from "components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import type { IFormPasswordForgotInputs } from "utils";
import { ROUTES, burgersApiController } from "utils";
import { useForm } from "hooks";
import { ModalFulfilled } from "./components";
import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ForgotPasswordPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    handleChange,
    handleSubmit,
    isFulfilled,
    isPending,
    isRejected,
    errorMessage,
    resetStatus,
    values,
    setValues,
  } = useForm<IFormPasswordForgotInputs>(
    { email: "" },
    burgersApiController.requestPasswordResetCode,
  );

  const { email } = values;

  const closeModalFulfilledHandler = () => {
    setValues({ email: "" });
    resetStatus();
    navigate(ROUTES.RESET_PASSWORD, {
      state: { from: location.pathname },
      replace: true,
    });
  };

  return (
    <>
      {isPending && (
        <ModalPending>отправляем код на почту {email}</ModalPending>
      )}
      {isRejected && (
        <ModalRejected closeModalHandler={resetStatus}>
          {errorMessage}
        </ModalRejected>
      )}
      {isFulfilled && (
        <ModalFulfilled
          email={email}
          closeModalHandler={closeModalFulfilledHandler}
        />
      )}
      <LF>
        <LF.Heading>Восстановление пароля</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <EmailInput
            name="email"
            placeholder="Укажите e-mail"
            value={email}
            onChange={handleChange("email")}
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
