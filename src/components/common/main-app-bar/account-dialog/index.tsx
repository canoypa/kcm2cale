import { Box, Button, Dialog, Divider } from "@material-ui/core";
import { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuth, useUser } from "reactfire";
import { firebase } from "../../../../core/firebase/app";
import { LineClamp } from "../../clamp";
import { UserIcon } from "../../user-icon";
import { useStyles } from "./styles";

type AccountHeaderProps = {
  user: firebase.User | null;
  onClose: () => void;
};
const AccountHeader: FC<AccountHeaderProps> = ({ user, onClose }) => {
  const auth = useAuth();

  const { push } = useHistory();
  const { pathname } = useLocation();

  const classes = useStyles();

  const singIn = () => {
    push("/signin", { continue: pathname });
  };
  const signOut = async () => {
    onClose();
    await auth.signOut();
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
  const { data: user } = useUser();
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <Box padding={2}>
        <AccountHeader user={user} onClose={onClose} />
      </Box>
      <Divider variant="middle" />
      <Box paddingY={1} paddingX={2}>
        <Link to="/about" className={classes.link}>
          <Button size="small">{__APP_NAME__} について</Button>
        </Link>
      </Box>
    </Dialog>
  );
};
