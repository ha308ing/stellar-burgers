import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppLink } from "./app-link";
import { ROUTES } from "utils";
import type { FC } from "react";

export const LinkRoot: FC = () => (
  <AppLink Icon={BurgerIcon} label="Конструктор" to={ROUTES.ROOT} />
);
