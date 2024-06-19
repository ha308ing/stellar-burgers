import { LayoutAppHeader as Header } from "../layouts/layout-app-header";
import { LinkOrdersFeed, LinkProfile, LinkRoot, LinkLogo } from "./header-link";

export const AppHeader = () => {
  return (
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
};
