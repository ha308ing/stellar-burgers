import { useEffect, useRef, useState } from "react";
import { ProfileEditInput as Input } from "./profile-edit-input/profile-edit-input";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-edit.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile } from "../../services/profile";
import {
  formProfileActions,
  selectFormProfile,
} from "../../services/forms/form-profile";
import { dispatchInputAction } from "../../utils/dispatch-actions";
import { STATUSES } from "../../utils";
import { ModalPending, ModalRejected, ModalFulfilled } from "../../components";

export const ProfileEdit = () => {
  const [disabled, setDisabled] = useState(true);
  const targetRef = useRef();
  const { user } = useSelector(selectProfile);
  const {
    inputs: formInputs,
    message: profileUpdateErrorMessage,
    status: profileUpdateStatus,
  } = useSelector(selectFormProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (targetRef.current) targetRef.current.current.focus();
  }, [disabled]);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const handleChange = dispatchInputAction(dispatch, formProfileActions.change);

  const { email, name, password } = disabled ? user : formInputs;

  const isPending = profileUpdateStatus === STATUSES.PENDING;
  const isRejected = profileUpdateStatus === STATUSES.REJECTED;
  const isFulfilled = profileUpdateStatus === STATUSES.FULFILLED;

  const buttonText = isPending ? "Обновляем..." : "Сохранить";

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(formProfileActions.submit({ email, name, password }));
    setDisabled(true);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    dispatch(formProfileActions.set(user));
    setDisabled(true);
  };

  return (
    <>
      {isFulfilled && (
        <ModalFulfilled
          closeModalHandler={() => {
            dispatch(formProfileActions.resetMessage());
          }}
        >
          Данные обновлены
        </ModalFulfilled>
      )}
      {isPending && <ModalPending>Обновляем данные</ModalPending>}
      {isRejected && (
        <ModalRejected
          handleModalClose={() => {
            dispatch(formProfileActions.resetMessage());
          }}
        >
          {profileUpdateErrorMessage}
        </ModalRejected>
      )}

      <form className={styles.profileContainer} onSubmit={handleSubmit}>
        <div className={styles.inputsContainer}>
          <Input
            placeholder="Имя"
            name="name"
            disabled={disabled}
            toggleDisabled={toggleDisabled}
            targetRef={targetRef}
            value={name}
            onChange={handleChange}
          />
          <Input
            placeholder="E-mail"
            name="email"
            disabled={disabled}
            toggleDisabled={toggleDisabled}
            targetRef={targetRef}
            value={email}
            onChange={handleChange}
          />
          <Input
            placeholder="Пароль"
            name="password"
            disabled={disabled}
            toggleDisabled={toggleDisabled}
            targetRef={targetRef}
            type="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        {!disabled && (
          <div className={styles.buttonsContainer}>
            <Button type="secondary" onClick={handleCancel} htmlType="button">
              Отмена
            </Button>
            <Button htmlType="submit" disabled={isPending}>
              {buttonText}
            </Button>
          </div>
        )}
      </form>
    </>
  );
};
