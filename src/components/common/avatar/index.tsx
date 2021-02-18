import { FC } from "react";
import { IconAccount } from "../icons";

type DummyUser = {
  photoURL: string;
};

type Props = {
  user?: DummyUser;
  size?: number;
};
export const Avatar: FC<Props> = ({ user, size = 32 }) =>
  user ? (
    <img src={user.photoURL} width={size} height={size} />
  ) : (
    <IconAccount size={size} />
  );
