import { withModal } from "../../../hocs/withModal";
import { ModalMobile as Modal } from "../../modal/modal-mobile";
import {
  LinkOrdersFeed,
  LinkProfile,
  LinkRoot,
} from "../../app-header/header-link";
import { LayoutProfileMenu } from "../../layouts/layout-profile/layout-profile-menu/layout-profile-menu";
import { useSelector } from "react-redux";
import { selectProfile } from "../../../services/profile";
import { MenuItem } from "./hamburger-menu-item/menu-item";
import { HamburgerButton } from "./hamburger-button/hamburger-button";
import PropTypes from "prop-types";

const HamburgerModal = ({ closeModalHandler }) => {
  const { user } = useSelector(selectProfile);

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

HamburgerModal.propTypes = {
  closeModalHandler: PropTypes.func.isRequired,
};
