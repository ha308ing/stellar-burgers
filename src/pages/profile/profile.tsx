import { LayoutProfile as LP } from "components";
import { Outlet } from "react-router-dom";
import type { FC } from "react";

export const ProfilePage: FC = () => (
  <LP>
    <Outlet />
  </LP>
);
