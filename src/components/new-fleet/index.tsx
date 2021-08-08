import { FC, useEffect } from "react";
import { useHistory } from "react-router";
import { firebase } from "../../core/firebase/app";
import { useUser } from "../../hooks/firebase/auth/useUser";
import { useFirestore } from "../../store/firebase/sdk";
import { useCreateNewFleet } from "./useCreateNewFleet";

// 編成を新規作成してリダイレクト
export const NewFleetPage: FC = () => {
  const firestoreLoadable = useFirestore();

  if (firestoreLoadable.state === "hasValue") {
    return <NewFleet firestore={firestoreLoadable.contents} />;
  }

  return null;
};

type Props = {
  firestore: firebase.firestore.Firestore;
};
const NewFleet: FC<Props> = ({ firestore }) => {
  const { replace } = useHistory();
  const createNewFleet = useCreateNewFleet(firestore);

  const { data: user } = useUser();

  useEffect(() => {
    // 未認証の場合スキップ
    if (!user) return;

    createNewFleet(user.uid).then((newFleetId) => {
      replace(`/fleet/${newFleetId}`);
    });
  }, [user]);

  return null;
};

export default NewFleetPage;
