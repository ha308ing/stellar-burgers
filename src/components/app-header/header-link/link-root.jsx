import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderLink } from "./header-link";
import { ROUTES } from "../../../utils";

export const LinkRoot = () => {
  return (
    <HeaderLink
      Icon={BurgerIcon}
      label="Конструктор"
      isActive={true}
      to={ROUTES.ROOT}
    />
  );
};
