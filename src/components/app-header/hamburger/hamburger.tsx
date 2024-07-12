import { withModal } from "hocs";
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
import { HamburgerButton } from "./hamburger-button/hamburger-button";
import type { FC } from "react";

interface IProps {
  closeModalHandler?: () => void;
}

const HamburgerModal: FC<IProps> = ({ closeModalHandler }) => {
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

export const MenuHamburger = withModal(HamburgerButton, HamburgerModal);
