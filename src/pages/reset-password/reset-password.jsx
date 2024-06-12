import { LayoutForm as LF } from "../../components";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "../../utils";

export const ResetPasswordPage = () => {
  return (
    <LF>
      <LF.Heading>Восстановление пароля</LF.Heading>
      <LF.Form>
        <PasswordInput name="password" placeholder="Введите новый пароль" />
        <Input name="reset_code" placeholder="Введите код из письма" />
        <LF.Button>Сохранить</LF.Button>
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
