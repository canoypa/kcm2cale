import { Avatar, IconButton, IconButtonProps } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import { FC, Suspense } from "react";
import { useUser } from "reactfire";
import { useStyles } from "./styles";

type UserAvatarProps = {
  size: number;
};
const UserAvatar: FC<UserAvatarProps> = ({ size }) => {
  const { data: user } = useUser();

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

type UserIconProps = {
  size?: number;
};
export const UserIcon: FC<UserIconProps> = ({ size = 32 }) => {
  return (
    <Suspense
      fallback={<Skeleton variant="circle" width={size} height={size} />}
    >
      <UserAvatar size={size} />
    </Suspense>
  );
};

export const UserIconButton: FC<IconButtonProps> = ({ ...props }) => {
  return (
    <IconButton style={{ padding: 8 }} {...props}>
      <UserIcon size={32} />
    </IconButton>
  );
};
