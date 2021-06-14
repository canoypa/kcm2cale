import { useHistory } from "react-router";
import {
  useFirestore,
  useFirestoreCollectionData,
  useFirestoreDocData,
} from "reactfire";
import { FirestoreFleetConverter } from "../../../core/firestore-converter";
import { useInitFleet } from "../../../core/initialize-fleet";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { decodeFleetStates } from "../../../core/persistence/local-fleet-data";
import { FireEquipment, FireFleet, FireShip } from "../../../models/fleet";
import { useDidMount } from "../../../util/hooks/lifecycle";
import { decodeFireToFleetStates } from "./fire-to-fleet-states";

export const useInitLocalFleet = (fleetId: string) => {
  const { replace } = useHistory();
  const initFleet = useInitFleet();

  useDidMount(() => {
    const loadFleet = async () => {
      const localFleetData = await LocalDatabase.getFleet(fleetId);

      if (localFleetData) {
        const fleetStates = decodeFleetStates(localFleetData);
        // 保存済みの編成がある場合初期化
        initFleet(fleetStates);
        return;
      }

      // 編成が存在しない場合リダイレクト
      replace("/");
    };
    loadFleet();
  });
};

export const useInitFireFleet = (fleetId: string) => {
  const { replace } = useHistory();
  const initFleet = useInitFleet();

  const fireFleetRef = useFirestore()
    .doc(`fleets/${fleetId}`)
    .withConverter(FirestoreFleetConverter);
  const fireShipsRef = fireFleetRef.collection("ships");
  const fireEquipmentsRef = fireFleetRef.collection("equipments");

  const { data: fleet } = useFirestoreDocData<FireFleet>(fireFleetRef, {
    idField: "id",
  });
  const { data: shipsList } = useFirestoreCollectionData<FireShip>(
    fireShipsRef,
    {
      idField: "id",
    }
  );
  const { data: equipmentsList } = useFirestoreCollectionData<FireEquipment>(
    fireEquipmentsRef,
    { idField: "id" }
  );

  console.log(fleet, shipsList, equipmentsList);

  useDidMount(() => {
    if (fleet && shipsList && equipmentsList) {
      const fleetStates = decodeFireToFleetStates(
        fleet,
        shipsList,
        equipmentsList
      );
      // 保存済みの編成がある場合初期化
      initFleet(fleetStates);
      return;
    }

    // 編成が存在しない場合リダイレクト
    replace("/");
  });
};
