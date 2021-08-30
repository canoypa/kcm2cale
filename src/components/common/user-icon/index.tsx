import { Avatar, IconButton, IconButtonProps } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { Skeleton } from "@material-ui/core";
import { FC } from "react";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { useStyles } from "./styles";

type UserAvatarProps = {
  size: number;
};
const UserAvatar: FC<UserAvatarProps> = ({ size }) => {
  const { data: signInCheckResult } = useSigninCheck();

  const classes = useStyles();

  if (!signInCheckResult.signedIn) {
    return <Skeleton variant="circular" width={size} height={size} />;
  }

  return (
    <Avatar className={classes.root} style={{ width: size, height: size }}>
      <AccountCircleOutlined />
    </Avatar>
  );
};

type UserIconProps = {
  size?: number;
};
export const UserIcon: FC<UserIconProps> = ({ size = 32 }) => {
  return <UserAvatar size={size} />;
};

export const UserIconButton: FC<IconButtonProps> = ({ ...props }) => {
  return (
    <IconButton style={{ padding: 8 }} {...props} size="large">
      <UserIcon size={32} />
    </IconButton>
  );
};
