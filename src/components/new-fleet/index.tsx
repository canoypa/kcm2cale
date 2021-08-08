import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { firebase } from "../../core/firebase/app";
import { useUser } from "../../hooks/firebase/auth/useUser";
import { useFirestore } from "../../store/firebase/sdk";
import { useCreateNewFleet } from "./useCreateNewFleet";

// 編成を新規作成してリダイレクト
export const NewFleet: FC = () => {
  const firestoreLoadable = useFirestore();

  if (firestoreLoadable.state === "hasValue") {
    return <_NewFleet firestore={firestoreLoadable.contents} />;
  }

  return null;
};

type Props = {
  firestore: firebase.firestore.Firestore;
};
const _NewFleet: FC<Props> = ({ firestore }) => {
  const { replace } = useRouter();
  const createNewFleet = useCreateNewFleet(firestore);

  const { data: user } = useUser();

  useEffect(() => {
    // 未認証の場合スキップ
    if (user) {
      createNewFleet(user.uid).then((newFleetId) => {
        replace(`/fleet/${newFleetId}`);
      });
    }
  }, [user]);

  return null;
};

export default NewFleet;
