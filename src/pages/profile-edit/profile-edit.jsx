import { LayoutProfile as LP } from "../../components";
import { ProfileEdit } from "../../components/profile-edit/profile-edit";
import styles from "./profile-edit.module.scss";

export const ProfileEditPage = () => {
  return (
    <>
      <LP.Content>
        <div className={styles.container}>
          <ProfileEdit />
        </div>
      </LP.Content>
      <LP.Footer>
        В этом разделе вы можете
        <br /> изменить свои персональные данные
      </LP.Footer>
    </>
  );
};
