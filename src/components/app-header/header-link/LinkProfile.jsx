import { useSelector } from "react-redux";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { HeaderLink } from "./header-link";
import { ROUTES } from "../../../utils";
import { selectName } from "../../../services/profile";

export const LinkProfile = () => {
  const name = useSelector(selectName);
  const profileLinkLabel = name || "Личный кабинет";

  return (
    <HeaderLink
      Icon={ProfileIcon}
      label={profileLinkLabel}
      to={ROUTES.PROFILE}
      title="Личный кабинет"
    />
  );
};
