import { LayoutProfile as LP, ProfileEdit } from "components";
import styles from "./profile-edit.module.scss";
import type { FC } from "react";

export const ProfileEditPage: FC = () => (
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
