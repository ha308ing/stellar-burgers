import { LayoutForm as LF, ModalRejected, ModalPending } from "components";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { IFormPasswordResetInputs } from "utils";
import { ROUTES, burgersApiController } from "utils";
import { useForm } from "hooks";
import type { FC } from "react";

export const ResetPasswordPage: FC = () => {
  const {
    handleChange,
    handleSubmit,
    isPending,
    isRejected,
    errorMessage,
    resetStatus,
    values,
  } = useForm<IFormPasswordResetInputs>(
    { password: "", token: "" },
    burgersApiController.resetPassword,
  );

  const { password, token } = values;

  return (
    <>
      {isPending && <ModalPending>сбрасываем пароль</ModalPending>}
      {isRejected && (
        <ModalRejected closeModalHandler={resetStatus}>
          {errorMessage}
        </ModalRejected>
      )}
      <LF>
        <LF.Heading>Восстановление пароля</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <PasswordInput
            name="password"
            placeholder="Введите новый пароль"
            value={password}
            onChange={handleChange("password")}
          />
          <Input
            name="token"
            placeholder="Введите код из письма"
            value={token}
            onChange={handleChange("token")}
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
