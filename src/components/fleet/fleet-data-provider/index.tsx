import React, { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFirestore } from "reactfire";
import { FirestoreFleetConverter } from "../../../core/firestore-converter";
import { FirestoreFleetEquipmentsConverter } from "../../../core/firestore-converter/equipments";
import { FirestoreFleetShipsConverter } from "../../../core/firestore-converter/ships";
import {
  EquipmentsContext,
  EquipmentsContextValue,
  FleetContext,
  FleetContextValue,
  ShipsContext,
  ShipsContextValue,
} from "../contexts";

type Props = {
  /** 更新抑制のためメモ化されたコンポーネントであるべき */
  children: ReactNode;
};
export const FleetDataProvider: FC<Props> = ({ children }) => {
  const firestore = useFirestore();

  // url から fleetId を取得
  const { fleetId } = useParams<{ fleetId: string }>();

  // useEffect からの更新検知のため useState を使用
  const [fleet, setFleet] = useState<FleetContextValue>(undefined);
  const [ships, setShips] = useState<ShipsContextValue>(undefined);
  const [equipments, setEquipments] = useState<EquipmentsContextValue>(
    undefined
  );

  useEffect(() => {
    const fleetDocRef = firestore
      .doc(`fleets/${fleetId}`)
      .withConverter(FirestoreFleetConverter);
    const shipsCollRef = fleetDocRef
      .collection("ships")
      .withConverter(FirestoreFleetShipsConverter);
    const equipmentsCollRef = fleetDocRef
      .collection("equipments")
      .withConverter(FirestoreFleetEquipmentsConverter);

    fleetDocRef.get().then((fleetDoc) => {
      // 編成が存在しない場合追加の読み込みなし
      if (!fleetDoc.exists) {
        setFleet(null);
        return;
      }

      setFleet(fleetDoc.data());

      shipsCollRef.get().then(({ docs }) => {
        setShips(docs.map((d) => d.data()));
      });
      equipmentsCollRef.get().then(({ docs }) => {
        setEquipments(docs.map((d) => d.data()));
      });
    });
  }, [firestore, fleetId]);

  return (
    <FleetContext.Provider value={fleet}>
      <ShipsContext.Provider value={ships}>
        <EquipmentsContext.Provider value={equipments}>
          {children}
        </EquipmentsContext.Provider>
      </ShipsContext.Provider>
    </FleetContext.Provider>
  );
};
