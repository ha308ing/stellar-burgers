import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderLink } from "./header-link";
import { ROUTES } from "../../../utils";
import type { FC } from "react";

export const LinkOrdersFeed: FC = () => {
  return (
    <HeaderLink Icon={ListIcon} label="Лента заказов" to={ROUTES.ORDERS_FEED} />
  );
};
