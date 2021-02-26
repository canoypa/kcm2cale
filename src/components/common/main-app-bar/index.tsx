import { FC, useState } from "react";
import { TopAppBar, TopAppBarIcon, TopAppBarSection } from "../app-bar";
import { UserIcon } from "../user-icon";
import { AccountDialog } from "./account-dialog";

export const MainAppBar: FC = () => {
  // const userLoadable = useUser();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  // const user = userLoadable.state === "hasValue" ? userLoadable.contents : null;

  return (
    <>
      <TopAppBar>
        <TopAppBarSection align="end">
          <TopAppBarIcon>
            <div onClick={openDialog}>
              <UserIcon user={null} />
            </div>
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBar>

      <AccountDialog open={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
