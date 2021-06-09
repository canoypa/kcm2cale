import { Avatar, IconButton, IconButtonProps } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { FC } from "react";
import { firebase } from "../../../core/firebase/app";
import { useStyles } from "./styles";

type UserIconProps = {
  user: firebase.User | null;
  size?: number;
};
export const UserIcon: FC<UserIconProps> = ({ user, size = 32 }) => {
  const classes = useStyles();

  return (
    <Avatar
      src={user?.photoURL ?? undefined}
      alt={user?.displayName ?? undefined}
      className={classes.root}
      style={{ width: size, height: size }}
    >
      <AccountCircleOutlined />
    </Avatar>
  );
};

type UserIconButtonProps = IconButtonProps & {
  user: firebase.User | null;
};
export const UserIconButton: FC<UserIconButtonProps> = ({ user, ...props }) => {
  return (
    <IconButton style={{ padding: 8 }} {...props}>
      <UserIcon user={null} size={32} />
    </IconButton>
  );
};
