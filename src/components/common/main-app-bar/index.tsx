import { AppBar, Box, Toolbar, useScrollTrigger } from "@mui/material";
import { FC, useState } from "react";
import { UserIconButton } from "../user-icon";
import { MainMenuDialog } from "./account-dialog";

export const MainAppBar: FC = () => {
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [isMainMenuOpen, setMainMenuOpen] = useState(false);
  const openMainMenu = () => setMainMenuOpen(true);
  const closeMainMenu = () => setMainMenuOpen(false);

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
            onClick={openMainMenu}
            aria-label="アカウントメニュー"
          />
        </Toolbar>
      </AppBar>

      <MainMenuDialog open={isMainMenuOpen} onClose={closeMainMenu} />
    </>
  );
};
