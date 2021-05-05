import { AccountCircleOutlined } from "@material-ui/icons";
import firebase from "firebase/app";
import { FC } from "react";
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
        <AccountCircleOutlined style={{ fontSize: size }} />
      )}
    </div>
  </div>
);
