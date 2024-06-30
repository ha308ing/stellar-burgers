import { withMobile } from "../../hocs/withMobile";
import { LayoutAppHeader as Header } from "../layouts/layout-app-header";
import { MenuHamburger } from "./hamburger/hamburger";
import { LinkOrdersFeed, LinkProfile, LinkRoot, LinkLogo } from "./header-link";

const HeaderDesktop = () => (
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

const HeaderMobile = () => (
  <Header>
    <LinkLogo />

    <MenuHamburger />
  </Header>
);

export const AppHeader = withMobile(HeaderDesktop, HeaderMobile);
