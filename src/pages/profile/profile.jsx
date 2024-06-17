import { LayoutProfile as LP } from "../../components";
import { Outlet } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <LP>
      <Outlet />
    </LP>
  );
};
