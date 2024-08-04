import type { FC } from "react";
import { LayoutForm as LF, ModalRejected } from "components";
import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { IFormLoginInputs } from "utils";
import { ROUTES, burgersApiController } from "utils";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useForm } from "hooks";
import { profileActions } from "services";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();

  const loginSubmit = async (inputs: IFormLoginInputs) => {
    const userData = await burgersApiController.login(inputs);
    dispatch(profileActions.set(userData));
  };

  const {
    handleChange,
    handleSubmit,
    isFulfilled,
    isPending,
    isRejected,
    errorMessage,
    values,
    resetStatus,
  } = useForm<IFormLoginInputs>({ email: "", password: "" }, loginSubmit);

  const { email, password } = values;

  const buttonText = isPending ? "Заходим..." : "Войти";

  const isButtonDisabled = isPending;

  return (
    <>
      {isFulfilled && <Navigate to={ROUTES.ROOT} replace={true} />}
      {isRejected && (
        <ModalRejected closeModalHandler={resetStatus}>
          {errorMessage}
        </ModalRejected>
      )}
      <LF>
        <LF.Heading>Вход</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <EmailInput
            name="email"
            value={email}
            onChange={handleChange("email")}
          />
          <PasswordInput
            name="password"
            value={password}
            onChange={handleChange("password")}
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
