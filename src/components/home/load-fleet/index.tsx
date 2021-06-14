import { FC } from "react";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import { FirestoreFleetConverter } from "../../../core/firestore-converter";
import {
  useFleetList,
  useRefreshFleetList,
} from "../../../hooks/organize/fleet";
import { FireFleet } from "../../../models/fleet";
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

export const LoadFireFleet: FC = () => {
  const { data: user } = useUser();

  const fleetsRef = useFirestore()
    .collection("fleets")
    .where("owner", "==", user.uid)
    .withConverter(FirestoreFleetConverter);
  const { data: fleetList } = useFirestoreCollectionData<FireFleet>(fleetsRef, {
    idField: "id",
  });

  return <FleetListContainer fleetList={fleetList} />;
};
