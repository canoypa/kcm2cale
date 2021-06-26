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

    Promise.all([
      fleetDocRef.get(),
      shipsCollRef.get(),
      equipmentsCollRef.get(),
    ]).then(([f, s, e]) => {
      if (f.exists) {
        setFleet(f.data());
        setShips(s.docs.map((d) => d.data()));
        setEquipments(e.docs.map((d) => d.data()));

        return;
      }

      setFleet(null);
      setShips(null);
      setEquipments(null);
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
