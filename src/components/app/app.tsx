import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import * as Pages from "pages";
import {
  OnlyAuthorizedElement,
  OnlyUnauthorizedElement,
  IngredientDetailsModal,
  ModalIngredientsError,
  ModalPending,
} from "components";
import { ROUTES, STATUSES } from "utils";
import {
  appActions,
  selectLoadingStatus,
  selectIgredientsGrouped,
} from "services";
import { MEDIA_QUERY_MD } from "config";
import { useAppDispatch, useAppSelector } from "hooks";

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { status: ingredientsStatus, ingredientsQty } = useAppSelector(
    selectIgredientsGrouped,
  );
  const appLoadingStatus = useAppSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(appActions.load());

    const dispatchMediaQuery = (
      mediaQuery: MediaQueryList | MediaQueryListEvent,
    ) => {
      if (mediaQuery.matches) {
        dispatch(appActions.setIsDesktop());
      } else {
        dispatch(appActions.setIsMobile());
      }
    };

    const mediaQuery = MEDIA_QUERY_MD;

    dispatchMediaQuery(mediaQuery);

    mediaQuery.addEventListener("change", dispatchMediaQuery);

    return () => mediaQuery.removeEventListener("change", dispatchMediaQuery);
  }, [dispatch]);

  const from = location.state?.from;
  const background = location.state?.background;

  const isResetPasswordAvailable = from === ROUTES.FORGOT_PASSWORD;

  const routes = useRoutes(
    [
      { path: ROUTES.ROOT, element: <Pages.HomePage /> },
      {
        path: ROUTES.REGISTER,
        element: <OnlyUnauthorizedElement element={<Pages.RegisterPage />} />,
      },
      {
        path: ROUTES.LOGIN,
        element: <OnlyUnauthorizedElement element={<Pages.LoginPage />} />,
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        element: (
          <OnlyUnauthorizedElement element={<Pages.ForgotPasswordPage />} />
        ),
      },
      {
        path: ROUTES.RESET_PASSWORD,
        element: (
          <OnlyUnauthorizedElement
            element={
              isResetPasswordAvailable ? (
                <Pages.ResetPasswordPage />
              ) : (
                <Navigate to={ROUTES.FORGOT_PASSWORD} />
              )
            }
          />
        ),
      },
      { path: ROUTES.ORDERS_FEED, element: <Pages.OrdersFeedPage /> },
      { path: ROUTES.INGREDIENT, element: <Pages.IngredientPage /> },
      {
        path: ROUTES.PROFILE,
        element: <OnlyAuthorizedElement element={<Pages.ProfilePage />} />,
        children: [
          { index: true, element: <Pages.ProfileEditPage /> },
          { path: ROUTES.ORDERS, element: <Pages.OrderHistoryPage /> },
        ],
      },
      { path: "*", element: <Pages.NotFoundPage /> },
    ],
    background || location,
  );

  if (appLoadingStatus === STATUSES.PENDING)
    return <ModalPending>грузим приложение</ModalPending>;

  if (
    ingredientsStatus === STATUSES.REJECTED ||
    (ingredientsStatus === STATUSES.FULFILLED && ingredientsQty === 0)
  )
    return <ModalIngredientsError />;

  return (
    <>
      {routes}

      {background && (
        <Routes>
          <Route
            path={ROUTES.INGREDIENT}
            element={<IngredientDetailsModal />}
          />
        </Routes>
      )}
    </>
  );
};
