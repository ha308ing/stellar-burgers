import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { ModalPending } from "../../components";
import { selectProfile } from "../../services/profile";
import { selectIsAuthChecked } from "../../services/app";
import { ROUTES } from "../../utils";
import PropTypes from "prop-types";

const ProtectedRouteElement = ({ onlyAuthorized = true, element }) => {
  const location = useLocation();
  const { user } = useSelector(selectProfile);
  const isAuthChecked = useSelector(selectIsAuthChecked);

  if (!isAuthChecked) {
    return <ModalPending>загрузка</ModalPending>;
  }

  if (!onlyAuthorized && user) {
    const from = location.state?.from ?? ROUTES.ROOT;
    return <Navigate to={from} replace={true} />;
  }

  if (onlyAuthorized && !user) {
    return (
      <Navigate
        to={ROUTES.LOGIN}
        state={{ from: location.pathname }}
        replace={true}
      />
    );
  }

  return element;
};

export const OnlyAuthorizedElement = ({ element }) => (
  <ProtectedRouteElement element={element} />
);

export const OnlyUnauthorizedElement = ({ element }) => (
  <ProtectedRouteElement onlyAuthorized={false} element={element} />
);

ProtectedRouteElement.propTypes = {
  onlyAuthorized: PropTypes.bool,
  element: PropTypes.element.isRequired,
};

OnlyAuthorizedElement.propTypes = {
  element: PropTypes.element.isRequired,
};

OnlyUnauthorizedElement.propTypes = {
  element: PropTypes.element.isRequired,
};
