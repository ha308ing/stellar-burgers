import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppLink } from "./app-link";
import { ROUTES } from "utils";
import type { FC } from "react";

export const LinkOrdersFeed: FC = () => {
  return (
    <AppLink Icon={ListIcon} label="Лента заказов" to={ROUTES.ORDERS_FEED} />
  );
};
