import { LayoutForm as LF } from "../../components";
import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "../../utils";

export const LoginPage = () => {
  return (
    <LF>
      <LF.Heading>Вход</LF.Heading>
      <LF.Form>
        <EmailInput name="email" />
        <PasswordInput name="password" />
        <LF.Button>Войти</LF.Button>
      </LF.Form>
      <LF.Footer>
        <LF.FooterString>
          Вы - новый пользователь?{" "}
          <LF.FooterLink to={ROUTES.REGISTER}>Зарегистрироваться</LF.FooterLink>
        </LF.FooterString>
        <LF.FooterString>
          Забыли пароль?{" "}
          <LF.FooterLink to={ROUTES.FORGOT_PASSWORD}>
            Восстановить пароль
          </LF.FooterLink>
        </LF.FooterString>
      </LF.Footer>
    </LF>
  );
};
