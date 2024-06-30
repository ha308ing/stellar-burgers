import { LayoutForm as LF, ModalRejected } from "../../components";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES, STATUSES } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  registerActions,
  selectFormRegister,
} from "../../services/forms/form-register";
import { Navigate } from "react-router-dom";
import {
  dispatchFormAction,
  dispatchInputAction,
} from "../../utils/dispatch-actions";

export const RegisterPage = () => {
  const {
    inputs: { name, email, password },
    status,
    message,
  } = useSelector(selectFormRegister);
  const dispatch = useDispatch();

  const handleSubmit = dispatchFormAction(
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
