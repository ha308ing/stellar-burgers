import { withModal } from "hocs";
import { HamburgerButton } from "./hamburger-button/hamburger-button";
import { HamburgerMenuModal } from "./hamburger-menu-modal/hamburger-menu-modal";

export const HamburgerButtonMenu = withModal(
  HamburgerButton,
  HamburgerMenuModal,
);
