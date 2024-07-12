import { ModalMobile as Modal } from "components/modal/modal-mobile";
import {
  LinkOrdersFeed,
  LinkProfile,
  LinkRoot,
} from "components/app-header/header-link";
import { LayoutProfileMenu } from "components/layouts/layout-profile/layout-profile-menu/layout-profile-menu";
import { useAppSelector } from "hooks";
import { selectProfile } from "services";
import { MenuItem } from "./hamburger-menu-item/menu-item";
import type { FC } from "react";

interface IProps {
  closeModalHandler?: () => void;
}

export const HamburgerMenuModal: FC<IProps> = ({ closeModalHandler }) => {
  const { user } = useAppSelector(selectProfile);

  return (
    <Modal closeModalHandler={closeModalHandler} title="Меню">
      <ul>
        <MenuItem
          link={<LinkProfile />}
          submenu={user && <LayoutProfileMenu />}
        />
        <MenuItem link={<LinkRoot />} />
        <MenuItem link={<LinkOrdersFeed />} />
      </ul>
    </Modal>
  );
};
