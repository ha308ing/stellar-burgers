import { useEffect, useRef, useState } from "react";
import { ProfileEditInput as Input } from "./profile-edit-input/profile-edit-input";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-edit.module.scss";
import { useAppDispatch, useAppSelector, useForm } from "hooks";
import { selectProfile, profileActions } from "services";
import { burgersApiController } from "utils";
import type { IUserDataPassword } from "utils";
import { ModalPending, ModalRejected, ModalFulfilled } from "components/modal";
import type { FC, MutableRefObject, SyntheticEvent } from "react";

export const ProfileEdit: FC = () => {
  const [disabled, setDisabled] = useState(true);
  const targetRef = useRef<MutableRefObject<HTMLInputElement>>();
  const { user } = useAppSelector(selectProfile);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const dispatch = useAppDispatch();

  const submitProfile = async (user: IUserDataPassword) => {
    const { email, name, password } = user;
    await burgersApiController.updateUserInfo(
      password.length === 0 ? { email, name } : user,
    );
    dispatch(profileActions.set({ email, name, password }));
    dispatch(profileActions.get());
    toggleDisabled();
  };

  const {
    handleChange,
    handleSubmit,
    isFulfilled,
    isPending,
    isRejected,
    values,
    errorMessage,
    resetStatus,
    setValues,
  } = useForm<IUserDataPassword>(
    {
      email: user?.email ?? "",
      name: user?.name ?? "",
      password: user?.password ?? "",
    },
    submitProfile,
  );

  useEffect(() => {
    if (targetRef.current) targetRef.current.current.focus();
  }, [disabled]);

  const { email, name, password } = disabled && user ? user : values;

  const buttonText = isPending ? "Обновляем..." : "Сохранить";

  const handleCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    if (user !== null) setValues(user);
    setDisabled(true);
  };

  return (
    <>
      {isFulfilled && (
        <ModalFulfilled closeModalHandler={resetStatus}>
          Данные обновлены
        </ModalFulfilled>
      )}
      {isPending && <ModalPending>Обновляем данные</ModalPending>}
      {isRejected && (
        <ModalRejected closeModalHandler={resetStatus}>
          {errorMessage}
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
            onChange={handleChange("name")}
          />
          <Input
            placeholder="E-mail"
            name="email"
            disabled={disabled}
            toggleDisabled={toggleDisabled}
            targetRef={targetRef}
            value={email}
            onChange={handleChange("email")}
          />
          <Input
            placeholder="Пароль"
            name="password"
            disabled={disabled}
            toggleDisabled={toggleDisabled}
            targetRef={targetRef}
            type="password"
            value={password}
            onChange={handleChange("password")}
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
