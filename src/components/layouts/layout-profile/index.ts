import { LayoutProfile as Layout } from "./layout-profile";
import { LayoutProfileFooter } from "./layout-profile-footer/layout-profile-footer";
import { LayouProfileContent } from "./layout-profile-content/layout-profile-content";

export const LayoutProfile = Object.assign(Layout, {
  Content: LayouProfileContent,
  Footer: LayoutProfileFooter,
});
