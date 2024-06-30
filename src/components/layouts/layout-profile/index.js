import { LayoutProfile } from "./layout-profile";

import { LayoutProfileFooter } from "./layout-profile-footer/layout-profile-footer";
import { LayouProfileContent } from "./layout-profile-content/layout-profile-content";

Object.assign(LayoutProfile, {
  Content: LayouProfileContent,
  Footer: LayoutProfileFooter,
});

export { LayoutProfile };
