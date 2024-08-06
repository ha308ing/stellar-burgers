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
  OrderInfoModal,
} from "components";
import { ROUTES } from "utils";
import {
  appActions,
  selectAppLoadingStatus,
  selectIngredientsStatus,
} from "services";
import { MEDIA_QUERY_MD } from "config";
import { useAppDispatch, useAppSelector } from "hooks";

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isNoIngredients } = useAppSelector(selectIngredientsStatus);
  const { isPending } = useAppSelector(selectAppLoadingStatus);

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
      { path: ROUTES.ORDER, element: <Pages.OrdersInfoPage /> },
      { path: ROUTES.ORDER_FEED, element: <Pages.OrdersInfoPage /> },
      { path: ROUTES.ORDERS_FEED, element: <Pages.OrdersFeedPage /> },
      { path: ROUTES.INGREDIENT, element: <Pages.IngredientPage /> },
      {
        path: ROUTES.PROFILE,
        element: <OnlyAuthorizedElement element={<Pages.ProfilePage />} />,
        children: [
          {
            path: ROUTES.PROFILE,
            element: <Pages.ProfileEditPage />,
          },
          {
            index: true,
            path: ROUTES.ORDERS,
            element: <Pages.OrderHistoryPage />,
          },
        ],
      },
      { path: "*", element: <Pages.NotFoundPage /> },
    ],
    background || location,
  );

  if (isPending) return <ModalPending>грузим приложение</ModalPending>;

  if (isNoIngredients) return <ModalIngredientsError />;

  return (
    <>
      {routes}

      {background && (
        <Routes>
          <Route
            path={ROUTES.INGREDIENT}
            element={<IngredientDetailsModal />}
          />
          <Route path={ROUTES.ORDER} element={<OrderInfoModal />} />
          <Route path={ROUTES.ORDER_FEED} element={<OrderInfoModal />} />
        </Routes>
      )}
    </>
  );
};
