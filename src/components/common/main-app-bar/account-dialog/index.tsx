import { Box, Button, Dialog, DialogContent } from "@material-ui/core";
import firebase from "firebase/app";
import { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../../../../core/firebase/auth";
import { useUser } from "../../../../core/firebase/auth/hooks";
import { LineClamp } from "../../clamp";
import { UserIcon } from "../../user-icon";
import { useStyles } from "./styles";

type AccountHeaderProps = {
  user: firebase.User | null;
  onClose: () => void;
};
const AccountHeader: FC<AccountHeaderProps> = ({ user, onClose }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const classes = useStyles();

  const singIn = () => {
    push("/signin", { continue: pathname });
  };
  const signOut = async () => {
    onClose();
    await firebaseAuth().signOut();
  };

  return user ? (
    <div>
      <div className={classes.accountHeader}>
        <UserIcon user={user} />
        <LineClamp count={1}>{user.displayName ?? ""}</LineClamp>
      </div>
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" onClick={signOut}>
          サインアウト
        </Button>
      </Box>
    </div>
  ) : (
    <div>
      <div className={classes.accountHeader}>
        <UserIcon user={user} />
        <span>サインインしていません</span>
      </div>
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" onClick={singIn}>
          サインイン
        </Button>
      </Box>
    </div>
  );
};

type Props = {
  open: boolean;
  onClose: () => void;
};
export const AccountDialog: FC<Props> = ({ open, onClose }) => {
  const userLoadable = useUser();
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent>
        <AccountHeader user={userLoadable.contents} onClose={onClose} />
        <div>
          <Link to="/about" className={classes.link}>
            {__APP_NAME__} について
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
