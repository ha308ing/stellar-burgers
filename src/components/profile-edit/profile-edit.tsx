import { useEffect, useRef, useState } from "react";
import { ProfileEditInput as Input } from "./profile-edit-input/profile-edit-input";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-edit.module.scss";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectProfile, formProfileActions, selectFormProfile } from "services";
import { STATUSES, dispatchInputAction } from "utils";
import { ModalPending, ModalRejected, ModalFulfilled } from "components";
import type { FC, FormEvent, MutableRefObject, SyntheticEvent } from "react";

export const ProfileEdit: FC = () => {
  const [disabled, setDisabled] = useState(true);
  const targetRef = useRef<MutableRefObject<HTMLInputElement>>();
  const { user } = useAppSelector(selectProfile);
  const {
    inputs: formInputs,
    message: profileUpdateErrorMessage,
    status: profileUpdateStatus,
  } = useAppSelector(selectFormProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (targetRef.current) targetRef.current.current.focus();
  }, [disabled]);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const handleChange = dispatchInputAction(dispatch, formProfileActions.change);

  const { email, name, password } = disabled && user ? user : formInputs;

  const isPending = profileUpdateStatus === STATUSES.PENDING;
  const isRejected = profileUpdateStatus === STATUSES.REJECTED;
  const isFulfilled = profileUpdateStatus === STATUSES.FULFILLED;

  const buttonText = isPending ? "Обновляем..." : "Сохранить";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(formProfileActions.submit({ email, name, password }));
    setDisabled(true);
  };

  const handleCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    if (user != null) dispatch(formProfileActions.set(user));
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
          closeModalHandler={() => {
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
