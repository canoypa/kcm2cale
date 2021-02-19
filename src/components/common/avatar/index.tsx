import firebase from "firebase/app";
import { FC } from "react";
import { IconAccount } from "../icons";

type Props = {
  user: firebase.User | null;
  size?: number;
};
export const Avatar: FC<Props> = ({ user, size = 32 }) =>
  user?.photoURL ? (
    <img src={user.photoURL} width={size} height={size} />
  ) : (
    <IconAccount size={size} />
  );
