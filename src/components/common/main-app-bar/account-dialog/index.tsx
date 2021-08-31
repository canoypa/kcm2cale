import { Box, Button, Dialog, Divider } from "@material-ui/core";
import Link from "next/link";
import { FC } from "react";
import { APP_NAME } from "../../../../core/env";
import { UserIcon } from "../../user-icon";
import { useStyles } from "./styles";

const AccountHeader: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.accountHeader}>
        <UserIcon />
        <span>サインインしていません</span>
      </div>
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
        <AccountHeader />
      </Box>
      <Divider variant="middle" />
      <Box paddingY={1} paddingX={2}>
        <Link href="/about" passHref>
          <Button size="small" className={classes.link}>
            {APP_NAME} について
          </Button>
        </Link>
      </Box>
    </Dialog>
  );
};
