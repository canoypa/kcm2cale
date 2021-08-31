import { AppBar, Box, Toolbar, useScrollTrigger } from "@material-ui/core";
import { FC, useState } from "react";
import { UserIconButton } from "../user-icon";
import { AccountDialog } from "./account-dialog";

export const MainAppBar: FC = () => {
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={elevateTrigger ? 4 : 0}
      >
        <Toolbar>
          <Box flexGrow={1} />
          <UserIconButton
            edge="end"
            onClick={openDialog}
            aria-label="アカウントメニュー"
          />
        </Toolbar>
      </AppBar>

      <AccountDialog open={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
