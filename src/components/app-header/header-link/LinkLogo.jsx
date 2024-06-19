import { Link } from "react-router-dom";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { ROUTES } from "../../../utils";

export const LinkLogo = () => {
  return (
    <Link to={ROUTES.ROOT} title="Stellar Burgers">
      <Logo />
    </Link>
  );
};
