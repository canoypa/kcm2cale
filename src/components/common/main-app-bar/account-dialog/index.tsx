import { Box, Button, Dialog, Divider } from "@material-ui/core";
import Link from "next/link";
import { FC } from "react";
import { APP_NAME } from "../../../../core/env";
import { UserIcon } from "../../user-icon";

const AccountHeader: FC = () => {
  return (
    <div>
      <Box display="flex" alignItems="center" gridColumnGap={16}>
        <UserIcon />
        <span>サインインしていません</span>
      </Box>
    </div>
  );
};

type Props = {
  open: boolean;
  onClose: () => void;
};
export const AccountDialog: FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <Box padding={2}>
        <AccountHeader />
      </Box>
      <Divider variant="middle" />
      <Box paddingY={1} paddingX={2}>
        <Link href="/about" passHref>
          <Button size="small">
            <Box component="span" color="text.secondary">
              {APP_NAME} について
            </Box>
          </Button>
        </Link>
      </Box>
    </Dialog>
  );
};
