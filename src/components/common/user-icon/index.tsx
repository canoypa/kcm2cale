import firebase from "firebase/app";
import { FC } from "react";
import { MaterialIcon } from "../icons";
import * as styles from "./styles";

type Props = {
  user: firebase.User | null;
  size?: number;
};
export const UserIcon: FC<Props> = ({ user, size = 32 }) => (
  <div className={styles.container}>
    <div className={styles.icon}>
      {user?.photoURL ? (
        <img src={user.photoURL} width={size} height={size} />
      ) : (
        <MaterialIcon icon="account_circle" size={size} />
      )}
    </div>
  </div>
);
