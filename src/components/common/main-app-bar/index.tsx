import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core";
import { FC, useState } from "react";
import { useUser } from "reactfire";
import { UserIconButton } from "../user-icon";
import { AccountDialog } from "./account-dialog";

export const MainAppBar: FC = () => {
  const { status: authStatus, data: userData } = useUser();

  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const user = authStatus === "success" ? userData : null;

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={elevateTrigger ? 4 : 0}
      >
        <Toolbar>
          <div style={{ flexGrow: 1 }}></div>
          <UserIconButton
            edge="end"
            user={user}
            onClick={openDialog}
            aria-label="アカウントメニュー"
          />
        </Toolbar>
      </AppBar>

      <AccountDialog open={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
