import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./layout-profile-nav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalFullfilled,
  ModalPending,
  ModalRejected,
} from "../../../../components";
import { profileActions, selectProfile } from "../../../../services/profile";
import { RESET_STORE } from "../../../../services/root-reducer";
import { ROUTES, STATUSES } from "../../../../utils";

export const LayoutProfileNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logoutStatus, message } = useSelector(selectProfile);

  const handleModalClose = () => {
    dispatch(profileActions.resetLogoutMessage());
  };

  const handleModalCloseNavigate = () => {
    dispatch({ type: RESET_STORE });
    navigate(ROUTES.ROOT);
  };

  const handleLogout = () => {
    dispatch(profileActions.logout());
  };

  return (
    <>
      {logoutStatus === STATUSES.PENDING && (
        <ModalPending>выполняется выход</ModalPending>
      )}
      {logoutStatus === STATUSES.REJECTED && (
        <ModalRejected closeModalHandler={handleModalClose}>
          {message}
        </ModalRejected>
      )}
      {logoutStatus === STATUSES.FULFILLED && (
        <ModalFullfilled closeModalHandler={handleModalCloseNavigate}>
          <Button htmlType="button" onClick={handleModalCloseNavigate}>
            На главную
          </Button>
        </ModalFullfilled>
      )}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to={ROUTES.PROFILE}
              className={({ isActive }) =>
                `${styles.button} ${isActive ? styles.active : ""}`
              }
              end={true}
            >
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.ORDERS}
              className={({ isActive }) =>
                `${styles.button} ${isActive ? styles.active : ""}`
              }
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <button className={styles.button} onClick={handleLogout}>
              Выход
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};