import {
  Avatar,
  IconButton,
  IconButtonProps,
  Skeleton,
} from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { FC } from "react";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";

type UserAvatarProps = {
  size: number;
};
const UserAvatar: FC<UserAvatarProps> = ({ size }) => {
  const { data: signInCheckResult } = useSigninCheck();

  if (!signInCheckResult.signedIn) {
    return <Skeleton variant="circular" width={size} height={size} />;
  }

  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        backgroundColor: "inherit",
        color: "inherit",
      }}
    >
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
    <IconButton sx={{ padding: 1 }} {...props} size="large">
      <UserIcon size={32} />
    </IconButton>
  );
};
