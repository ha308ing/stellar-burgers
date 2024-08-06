import { LayoutForm as LF, ModalRejected } from "components";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES, burgersApiController } from "utils";
import { useAppDispatch, useForm } from "hooks";
import { profileActions } from "services";
import { Navigate } from "react-router-dom";
import type { FC } from "react";
import type { IFormRegisterInputs } from "utils";

export const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();

  const registerSubmit = async (formData: IFormRegisterInputs) => {
    const response = await burgersApiController.register(formData);
    dispatch(profileActions.set(response));
    dispatch(profileActions.get());
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
  } = useForm<IFormRegisterInputs>(
    { email: "", name: "", password: "" },
    registerSubmit,
  );
  const { email, name, password } = values;

  const buttonText = isPending ? "Регистрируемся..." : "Зарегистрироваться";

  const isButtonDisabled = isPending;

  return (
    <>
      {isRejected && (
        <ModalRejected closeModalHandler={resetStatus}>
          {errorMessage}
        </ModalRejected>
      )}
      {isFulfilled && <Navigate to={ROUTES.ROOT} replace={true} />}
      <LF>
        <LF.Heading>Регистрация</LF.Heading>
        <LF.Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Имя"
            value={name}
            onChange={handleChange("name")}
          />
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
