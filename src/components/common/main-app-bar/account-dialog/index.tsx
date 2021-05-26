import { Box, Button, Dialog, Divider } from "@material-ui/core";
import firebase from "firebase/app";
import { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../../../../core/firebase/auth";
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

  const _singIn = () => {
    push("/sign-in", { continue: pathname });
  };
  const _signOut = async () => {
    await firebaseAuth().signOut();
    onClose();
  };

  return (
    <>
      <div className={classes.accountHeader}>
        <UserIcon user={user} />
        <span>サインインしていません</span>
      </div>
      {/* <div className={styles.promoteSignIn}>
        <Button type="outline" label="サインイン" onClick={singIn} />
      </div> */}
    </>
  );
};

type Props = {
  open: boolean;
  onClose: () => void;
};
export const AccountDialog: FC<Props> = ({ open, onClose }) => {
  // const userLoadable = useUser();
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <Box padding={2}>
        <AccountHeader user={null} onClose={onClose} />
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
