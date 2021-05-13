import {
  AppBar,
  IconButton,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import { FC, useState } from "react";
import { UserIcon } from "../user-icon";
import { AccountDialog } from "./account-dialog";

export const MainAppBar: FC = () => {
  // const userLoadable = useUser();

  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  // const user = userLoadable.state === "hasValue" ? userLoadable.contents : null;

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={elevateTrigger ? 4 : 0}
      >
        <Toolbar>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            edge="end"
            onClick={openDialog}
            aria-label="アカウントメニュー"
          >
            <UserIcon user={null} size={24} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AccountDialog open={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
