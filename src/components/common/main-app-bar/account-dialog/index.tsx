import { Box, Button, Dialog, Divider } from "@material-ui/core";
import { signInAnonymously } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { getAuth } from "../../../../core/firebase/sdk/auth";
import { useSigninCheck } from "../../../../hooks/firebase/auth/useSigninCheck";
import { LineClamp } from "../../clamp";
import { UserIcon } from "../../user-icon";
import { useStyles } from "./styles";

type AccountHeaderProps = {
  onClose: () => void;
};
const AccountHeader: FC<AccountHeaderProps> = ({ onClose }) => {
  const auth = getAuth();
  const { data: signInCheckResult } = useSigninCheck();

  const { pathname } = useRouter();

  const classes = useStyles();

  const signOut = () => {
    onClose();
    signInAnonymously(auth);
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
        <Link
          href={{
            pathname: "/sign-in",
            query: { continue: pathname },
          }}
        >
          <Button variant="outlined">サインイン</Button>
        </Link>
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
        <Link href="/about">
          <Button size="small" className={classes.link}>
            {process.env.APP_NAME} について
          </Button>
        </Link>
      </Box>
    </Dialog>
  );
};
