import { withModal } from "../../../hocs/withModal";
import { ModalMobile as Modal } from "../../modal/modal-mobile";
import {
  LinkOrdersFeed,
  LinkProfile,
  LinkRoot,
} from "../../app-header/header-link";
import { LayoutProfileMenu } from "../../layouts/layout-profile/layout-profile-menu/layout-profile-menu";
import { useAppSelector } from "../../../hooks";
import { selectProfile } from "../../../services/profile";
import { MenuItem } from "./hamburger-menu-item/menu-item";
import { HamburgerButton } from "./hamburger-button/hamburger-button";
import { FC } from "react";

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
