import { FC, useState } from "react";
import { TopAppBar, TopAppBarIcon, TopAppBarSection } from "../app-bar";
import { IconButton } from "../button";
import { IconAccount } from "../icons";
import { AccountDialog } from "./account-dialog";

export const MainAppBar: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <TopAppBar>
        <TopAppBarSection align="end">
          <TopAppBarIcon>
            <IconButton icon={<IconAccount />} onClick={openDialog} />
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBar>

      <AccountDialog open={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
