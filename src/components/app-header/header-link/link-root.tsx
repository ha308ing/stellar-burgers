import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderLink } from "./header-link";
import { ROUTES } from "utils";
import type { FC } from "react";

export const LinkRoot: FC = () => (
  <HeaderLink Icon={BurgerIcon} label="Конструктор" to={ROUTES.ROOT} />
);
