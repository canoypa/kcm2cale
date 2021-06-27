import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useFirestore, useUser } from "reactfire";
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
  const { data: user } = useUser();
  const firestore = useFirestore();

  // url から fleetId を取得
  const { fleetId } = useParams<{ fleetId: string }>();

  // useEffect からの更新検知のため useState を使用
  const [fleet, setFleet] = useState<FleetContextValue>(undefined);
  const [ships, setShips] = useState<ShipsContextValue>(undefined);
  const [equipments, setEquipments] = useState<EquipmentsContextValue>(
    undefined
  );

  // 作成者の場合のみ変更を受け取るようにするあれこれ
  // next.js 移行できれいにしてくれ...
  const isOwner = useRef<boolean | undefined>(undefined);
  const fDocUnsubscribe = useRef<(() => void) | undefined>(undefined);
  const sCollUnsubscribe = useRef<(() => void) | undefined>(undefined);
  const eCollUnsubscribe = useRef<(() => void) | undefined>(undefined);

  // データが揃った後、作成者でなければリスナを解除
  useEffect(() => {
    if (!isOwner.current && fleet && ships && equipments) {
      fDocUnsubscribe.current?.();
      sCollUnsubscribe.current?.();
      eCollUnsubscribe.current?.();
    }
  }, [fleet, ships, equipments]);

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

    fDocUnsubscribe.current = fleetDocRef.onSnapshot((f) => {
      const data = f.data();
      if (data) {
        isOwner.current = data.owner === user.uid;

        setFleet(data);
      }
    });

    sCollUnsubscribe.current = shipsCollRef.onSnapshot((s) => {
      setShips(s.docs.map((d) => d.data()));
    });

    eCollUnsubscribe.current = equipmentsCollRef.onSnapshot((e) => {
      setEquipments(e.docs.map((d) => d.data()));
    });
  }, [firestore, fleetId, user.uid]);

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
