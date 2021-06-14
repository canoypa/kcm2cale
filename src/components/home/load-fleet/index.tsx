import { FC } from "react";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import { firebase } from "../../../core/firebase/app";
import { LocalFleetDataV1 } from "../../../core/persistence/types";
import {
  useFleetList,
  useRefreshFleetList,
} from "../../../hooks/organize/fleet";
import { useDidMount } from "../../../util/hooks/lifecycle";
import { FleetListContainer } from "../fleet-list-container";

export const LoadLocalFleet: FC = () => {
  const refreshFleet = useRefreshFleetList();

  // 保存されている編成をすべて取得
  const fleetList = useFleetList();

  // 初回リフレッシュ
  useDidMount(() => {
    refreshFleet();
  });

  return <FleetListContainer fleetList={fleetList} />;
};

const converter = {
  toFirestore: () => ({}),
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): LocalFleetDataV1 {
    const data = snapshot.data(options)!;

    const createdAt = data.createdAt.toDate();
    const updatedAt = data.updatedAt.toDate();

    return { ...data, createdAt, updatedAt };
  },
};

export const LoadFireFleet: FC = () => {
  const { data: user } = useUser();

  const fleetsRef = useFirestore()
    .collection("fleets")
    .where("owner", "==", user.uid)
    .withConverter(converter);
  const { data: fleetList } = useFirestoreCollectionData(fleetsRef, {
    idField: "id",
  });

  return <FleetListContainer fleetList={fleetList} />;
};
