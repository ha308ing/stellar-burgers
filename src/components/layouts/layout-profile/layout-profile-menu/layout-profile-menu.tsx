import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./layout-profile-menu.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import { ModalFulfilled, ModalPending, ModalRejected } from "components";
import { profileActions, selectProfile, resetStore } from "services";
import { ROUTES, STATUSES } from "utils";
import type { FC } from "react";

export const LayoutProfileMenu: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { logoutStatus, message } = useAppSelector(selectProfile);

  const handleModalClose = () => {
    dispatch(profileActions.resetLogoutMessage());
  };

  const handleModalCloseNavigate = () => {
    dispatch(resetStore());
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
        <ModalFulfilled closeModalHandler={handleModalCloseNavigate}>
          <Button htmlType="button" onClick={handleModalCloseNavigate}>
            На главную
          </Button>
        </ModalFulfilled>
      )}
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
    </>
  );
};
