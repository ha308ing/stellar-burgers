import { LayoutForm as LF } from "../../components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "../../utils";

export const ForgotPasswordPage = () => {
  return (
    <LF>
      <LF.Heading>Восстановление пароля</LF.Heading>
      <LF.Form>
        <EmailInput name="email" placeholder="Укажите e-mail" />
        <LF.Button>Восстановить</LF.Button>
      </LF.Form>
      <LF.Footer>
        <LF.FooterString>
          Вспомнили пароль?{" "}
          <LF.FooterLink to={ROUTES.LOGIN}>Войти</LF.FooterLink>
        </LF.FooterString>
      </LF.Footer>
    </LF>
  );
};
