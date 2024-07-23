import { ModalMobile as Modal } from "components/modal";
import { ProfileMenu } from "components/profile-menu";
import {
  LinkProfile,
  LinkRoot,
  LinkOrdersFeed,
} from "components/app-header/app-link";
import { useAppSelector } from "hooks";
import { selectProfile } from "services";
import { MenuItem } from "./hamburger-menu-item";
import type { FC } from "react";

interface IProps {
  closeModalHandler?: () => void;
}

export const HamburgerMenuModal: FC<IProps> = ({ closeModalHandler }) => {
  const { user } = useAppSelector(selectProfile);

  return (
    <Modal closeModalHandler={closeModalHandler} title="Меню">
      <ul>
        <MenuItem link={<LinkProfile />} submenu={user && <ProfileMenu />} />
        <MenuItem link={<LinkRoot />} />
        <MenuItem link={<LinkOrdersFeed />} />
      </ul>
    </Modal>
  );
};
