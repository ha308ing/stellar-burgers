import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderLink } from "./header-link";
import { ROUTES } from "../../../utils";

export const LinkOrdersFeed = () => {
  return (
    <HeaderLink Icon={ListIcon} label="Лента заказов" to={ROUTES.ORDERS_FEED} />
  );
};
