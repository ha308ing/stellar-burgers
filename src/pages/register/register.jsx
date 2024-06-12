import { LayoutForm as LF } from "../../components";
import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "../../utils";

export const RegisterPage = () => {
  return (
    <LF>
      <LF.Heading>Регистрация</LF.Heading>
      <LF.Form>
        <Input name="name" placeholder="Имя" />
        <EmailInput name="email" />
        <PasswordInput name="password" />
        <LF.Button>Зарегистрироваться</LF.Button>
      </LF.Form>
      <LF.Footer>
        <LF.FooterString>
          Уже зарегистрированы?{" "}
          <LF.FooterLink to={ROUTES.LOGIN}>Войти</LF.FooterLink>
        </LF.FooterString>
      </LF.Footer>
    </LF>
  );
};
