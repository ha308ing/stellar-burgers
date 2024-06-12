import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  RegisterPage,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from "../../pages";
import { ROUTES } from "../../utils";

export const App = () => (
  <Routes>
    <Route path={ROUTES.ROOT} element={<HomePage />} />
    <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
    <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
  </Routes>
);
