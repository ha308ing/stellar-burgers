import { useAppSelector } from "../../hooks";
import { useLocation, Navigate } from "react-router-dom";
import { ModalPending } from "../../components";
import { selectProfile } from "../../services/profile";
import { selectIsAuthChecked } from "../../services/app";
import { ROUTES } from "../../utils";
import type { FC } from "react";

interface IPropsElement {
  element: JSX.Element;
}

interface IProps extends IPropsElement {
  onlyAuthorized?: boolean;
}

const ProtectedRouteElement: FC<IProps> = ({
  onlyAuthorized = true,
  element,
}) => {
  const location = useLocation();
  const { user } = useAppSelector(selectProfile);
  const isAuthChecked = useAppSelector(selectIsAuthChecked);

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

export const OnlyAuthorizedElement: FC<IPropsElement> = ({ element }) => (
  <ProtectedRouteElement element={element} />
);

export const OnlyUnauthorizedElement: FC<IPropsElement> = ({ element }) => (
  <ProtectedRouteElement onlyAuthorized={false} element={element} />
);
