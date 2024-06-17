import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  HomePage,
  RegisterPage,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFoundPage,
  ProfileEditPage,
  OrderHistoryPage,
  OrdersFeedPage,
  IngredientPage,
} from "../../pages";
import {
  OnlyAuthorizedElement,
  OnlyUnauthorizedElement,
  IngredientDetailsModal,
  ModalIngredientsError,
  ModalPending,
} from "../index";
import { ROUTES, STATUSES } from "../../utils";
import { profileActions, selectProfile } from "../../services/profile";
import {
  ingredientsActions,
  selectIgredientsGrouped,
} from "../../services/ingredients";

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { status: ingredientsStatus, ingredientsQty } = useSelector(
    selectIgredientsGrouped,
  );
  const { status: profileStatus } = useSelector(selectProfile);

  useEffect(() => {
    dispatch(ingredientsActions.getIngredients());
    dispatch(profileActions.get());
  }, [dispatch]);

  const background = location?.state?.background;

  const handleModalClose = () => {
    navigate(-1);
  };

  const handleRetry = () => {
    dispatch(ingredientsActions.getIngredients());
  };

  if (profileStatus === STATUSES.PENDING)
    return <ModalPending>грузим профиль</ModalPending>;

  if (ingredientsStatus === STATUSES.PENDING)
    return <ModalPending>грузим бургеры</ModalPending>;

  if (
    ingredientsStatus === STATUSES.REJECTED ||
    (ingredientsStatus === STATUSES.FULFILLED && ingredientsQty === 0)
  )
    return <ModalIngredientsError handleRetry={handleRetry} />;

  return (
    <>
      <Routes location={background || location}>
        <Route path={ROUTES.ROOT} element={<HomePage />} />
        <Route
          path={ROUTES.REGISTER}
          element={<OnlyUnauthorizedElement element={<RegisterPage />} />}
        />
        <Route
          path={ROUTES.LOGIN}
          element={<OnlyUnauthorizedElement element={<LoginPage />} />}
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<OnlyUnauthorizedElement element={<ForgotPasswordPage />} />}
        />
        <Route
          path={ROUTES.RESET_PASSWORD}
          element={<OnlyUnauthorizedElement element={<ResetPasswordPage />} />}
        />
        <Route path={ROUTES.ORDERS_FEED} element={<OrdersFeedPage />} />
        <Route path={ROUTES.INGREDIENT} element={<IngredientPage />} />
        <Route
          path={ROUTES.PROFILE}
          element={<OnlyAuthorizedElement element={<ProfilePage />} />}
        >
          <Route index element={<ProfileEditPage />} />
          <Route path={ROUTES.ORDERS} element={<OrderHistoryPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={ROUTES.INGREDIENT}
            element={
              <IngredientDetailsModal closeModalHandler={handleModalClose} />
            }
          />
        </Routes>
      )}
    </>
  );
};
