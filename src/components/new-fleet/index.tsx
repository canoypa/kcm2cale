import { FC } from "react";
import { useHistory } from "react-router";
import { firebase } from "../../core/firebase/app";
import { generateFleetId } from "../../core/util/generate-id";
import { useUser } from "../../hooks/firebase/useUser";
import { FleetType } from "../../models/fleet";
import { useFirestore } from "../../store/firebase/sdk";
import { useDidMount } from "../../util/hooks/lifecycle";

// 編成を新規作成してリダイレクト
export const NewFleet: FC = () => {
  const { replace } = useHistory();
  const firestore = useFirestore();
  const { data: user } = useUser();

  useDidMount(() => {
    const newFleetId = generateFleetId();
    const newFleetRef = firestore.doc(`fleets/${newFleetId}`);

    const initFleetData = {
      version: 1,

      id: newFleetId,

      // Fixme
      owner: user?.uid,

      title: "",
      description: "",
      type: FleetType.Normal,

      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    newFleetRef.set(initFleetData).then(() => {
      replace(`/fleet/${newFleetId}`);
    });
  });

  return null;
};

export default NewFleet;
