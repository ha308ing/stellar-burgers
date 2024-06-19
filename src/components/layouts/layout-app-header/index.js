import { LayoutAppHeaderLeft } from "./layout-app-header-left";
import { LayoutAppHeaderCenter } from "./layout-app-header-center";
import { LayoutAppHeaderRight } from "./layout-app-header-right";
import { LayoutAppHeader } from "./layout-app-header";

Object.assign(LayoutAppHeader, {
  Left: LayoutAppHeaderLeft,
  Center: LayoutAppHeaderCenter,
  Right: LayoutAppHeaderRight,
});

export { LayoutAppHeader };
