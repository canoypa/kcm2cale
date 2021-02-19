import firebase from "firebase/app";
import { FC } from "react";
import { useHistory, useLocation } from "react-router";
import { firebaseAuth } from "../../../../core/firebase/auth";
import { useUser } from "../../../../core/firebase/auth/hooks";
import { Button } from "../../button";
import { Dialog, DialogContent } from "../../dialog";
import { UserIcon } from "../../user-icon";
import * as styles from "./styles";

type AccountHeaderProps = {
  user: firebase.User | null;
  onClose: () => void;
};
const AccountHeader: FC<AccountHeaderProps> = ({ user, onClose }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const singIn = () => {
    push("/sign-in", { continue: pathname });
  };
  const signOut = async () => {
    await firebaseAuth().signOut();
    onClose();
  };

  return user ? (
    <>
      <div className={styles.accountHeader}>
        <UserIcon user={user} />
        <span>{user.displayName}</span>
      </div>
      <div className={styles.promoteSignIn}>
        <Button type="outline" label="サインアウト" onClick={signOut} />
      </div>
    </>
  ) : (
    <>
      <div className={styles.accountHeader}>
        <UserIcon user={user} />
        <span>サインインしていません</span>
      </div>
      <div className={styles.promoteSignIn}>
        <Button type="outline" label="サインイン" onClick={singIn} />
      </div>
    </>
  );
};

type Props = {
  open: boolean;
  onClose: () => void;
};
export const AccountDialog: FC<Props> = ({ open, onClose }) => {
  const userLoadable = useUser();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        {userLoadable.state === "hasValue" && (
          <AccountHeader user={userLoadable.contents} onClose={onClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};
