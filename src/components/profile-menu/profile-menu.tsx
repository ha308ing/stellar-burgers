import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-menu.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import { ModalFulfilled, ModalPending, ModalRejected } from "components/modal";
import { profileActions, resetStore, selectLogoutStatus } from "services";
import { ROUTES } from "utils";
import type { FC } from "react";

export const ProfileMenu: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isPending, isRejected, isFulfilled, message } =
    useAppSelector(selectLogoutStatus);

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
      {isPending && <ModalPending>выполняется выход</ModalPending>}
      {isRejected && (
        <ModalRejected closeModalHandler={handleModalClose}>
          {message}
        </ModalRejected>
      )}
      {isFulfilled && (
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
