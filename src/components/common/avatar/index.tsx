import firebase from "firebase/app";
import { FC } from "react";
import { IconAccount } from "../icons";
import * as styles from "./styles";

type Props = {
  user: firebase.User | null;
  size?: number;
};
export const Avatar: FC<Props> = ({ user, size = 32 }) => (
  <div className={styles.container}>
    {user?.photoURL ? (
      <img src={user.photoURL} width={size} height={size} />
    ) : (
      <IconAccount size={size} />
    )}
  </div>
);
