import { LayoutAppHeaderLeft } from "./layout-app-header-left";
import { LayoutAppHeaderCenter } from "./layout-app-header-center";
import { LayoutAppHeaderRight } from "./layout-app-header-right";
import { LayoutAppHeader as Layout } from "./layout-app-header";

export const LayoutAppHeader = Object.assign(Layout, {
  Left: LayoutAppHeaderLeft,
  Center: LayoutAppHeaderCenter,
  Right: LayoutAppHeaderRight,
});
