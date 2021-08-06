import { Box, Button, Dialog, Divider } from "@material-ui/core";
import { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSigninCheck } from "../../../../hooks/firebase/auth/useSigninCheck";
import { useAuth } from "../../../../store/firebase/sdk";
import { LineClamp } from "../../clamp";
import { UserIcon } from "../../user-icon";
import { useStyles } from "./styles";

type AccountHeaderProps = {
  onClose: () => void;
};
const AccountHeader: FC<AccountHeaderProps> = ({ onClose }) => {
  const auth = useAuth();
  const { data: signInCheckResult } = useSigninCheck();

  const { push } = useHistory();
  const { pathname } = useLocation();

  const classes = useStyles();

  const singIn = () => {
    push("/signin", { continue: pathname });
  };
  const signOut = () => {
    onClose();
    auth.signOut();
  };

  if (!signInCheckResult.signedIn) {
    return null;
  }

  const user = signInCheckResult.user;
  return user.isAnonymous ? (
    <div>
      <div className={classes.accountHeader}>
        <UserIcon />
        <span>サインインしていません</span>
      </div>
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" onClick={singIn}>
          サインイン
        </Button>
      </Box>
    </div>
  ) : (
    <div>
      <div className={classes.accountHeader}>
        <UserIcon />
        <LineClamp count={1}>{user.displayName ?? ""}</LineClamp>
      </div>
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" onClick={signOut}>
          サインアウト
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
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <Box padding={2}>
        <AccountHeader onClose={onClose} />
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
