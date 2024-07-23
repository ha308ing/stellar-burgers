import { useLocation } from "react-router-dom";
import { LayoutAppHeader as Header } from "./layout-app-header";
import { HamburgerButtonMenu } from "./hamburger-button-menu";
import { LinkOrdersFeed, LinkProfile, LinkRoot, LinkLogo } from "./app-link";
import { withMobile } from "hocs";
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
      <HamburgerButtonMenu key={location.key} />
    </Header>
  );
};

export const AppHeader = withMobile(HeaderDesktop, HeaderMobile);
