import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";
import { ROUTES } from "../../utils";

export const App = () => (
  <Routes>
    <Route path={ROUTES.ROOT} element={<HomePage />} />
  </Routes>
);
