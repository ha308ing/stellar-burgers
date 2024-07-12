import { useLocation } from "react-router-dom";
import { withMobile } from "../../hocs/with-mobile";
import { LayoutAppHeader as Header } from "../layouts/layout-app-header";
import { MenuHamburger } from "./hamburger/hamburger";
import { LinkOrdersFeed, LinkProfile, LinkRoot, LinkLogo } from "./header-link";
import type { FC } from "react";

const HeaderDesktop: FC = () => (
  <Header>
    <Header.Left>
      <LinkRoot />
      <LinkOrdersFeed />
    </Header.Left>

    <Header.Center>
      <LinkLogo />
    </Header.Center>

    <Header.Right>
      <LinkProfile />
    </Header.Right>
  </Header>
);

const HeaderMobile: FC = () => {
  const location = useLocation();

  return (
    <Header>
      <LinkLogo />
      <MenuHamburger key={location.key} />
    </Header>
  );
};

export const AppHeader = withMobile(HeaderDesktop, HeaderMobile);
