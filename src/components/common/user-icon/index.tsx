import { AccountCircleOutlined } from "@material-ui/icons";
import firebase from "firebase/app";
import { FC } from "react";
import { useStyles } from "./styles";

type Props = {
  user: firebase.User | null;
  size?: number;
};
export const UserIcon: FC<Props> = ({ user, size = 32 }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        {user?.photoURL ? (
          <img src={user.photoURL} width={size} height={size} />
        ) : (
          <AccountCircleOutlined style={{ fontSize: size }} />
        )}
      </div>
    </div>
  );
};
