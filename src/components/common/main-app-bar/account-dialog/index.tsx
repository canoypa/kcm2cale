import { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { Avatar } from "../../avatar";
import { Button } from "../../button";
import { Dialog, DialogContent } from "../../dialog";
import * as styles from "./styles";

type Props = {
  open: boolean;
  onClose: () => void;
};
export const AccountDialog: FC<Props> = ({ open, onClose }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const singIn = () => push("/sign-in", { continue: pathname });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <div className={styles.accountHeader}>
          <Avatar />
          <span>サインインしていません</span>
        </div>
        <div className={styles.promoteSignIn}>
          <Button type="outline" label="サインイン" onClick={singIn} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
