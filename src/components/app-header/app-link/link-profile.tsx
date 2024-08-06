import { useAppSelector } from "hooks";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { AppLink } from "./app-link";
import { ROUTES } from "utils";
import { selectName } from "services";
import React from "react";

export const LinkProfile = React.memo(() => {
  const name = useAppSelector(selectName);
  const profileLinkLabel = name || "Личный кабинет";

  return (
    <AppLink
      Icon={ProfileIcon}
      label={profileLinkLabel}
      to={ROUTES.ORDERS}
      title="Личный кабинет"
    />
  );
});
