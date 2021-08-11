import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { FC, ReactNode, useContext, useEffect, useRef } from "react";
import { getFirestore } from "../../../core/firebase/sdk/firestore";
import { FirestoreFleetConverter } from "../../../core/firestore-converter";
import { FirestoreFleetEquipmentsConverter } from "../../../core/firestore-converter/equipments";
import { FirestoreFleetShipsConverter } from "../../../core/firestore-converter/ships";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { FleetIdContext } from "../fleetIdContext";
import { useEquipments, useFleet, useShips } from "../hooks";

type Props = {
  /** 更新抑制のためメモ化されたコンポーネントであるべき */
  children: ReactNode;
};
export const FleetDataProvider: FC<Props> = ({ children }) => {
  const fleetId = useContext(FleetIdContext);

  const firestore = getFirestore();
  const { data: signInCheckResult } = useSigninCheck();

  const { data: fleet, mutate: mutateFleet } = useFleet(fleetId);
  const { data: ships, mutate: mutateShips } = useShips(fleetId);
  const { data: equipments, mutate: mutateEquipments } = useEquipments(fleetId);

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
  }, [equipments, fleet, ships]);

  useEffect(() => {
    if (signInCheckResult.signedIn) {
      const user = signInCheckResult.user;

      const fleetDocRef = doc(firestore, `fleets/${fleetId}`).withConverter(
        FirestoreFleetConverter
      );
      const shipsCollRef = collection(fleetDocRef, "ships").withConverter(
        FirestoreFleetShipsConverter
      );
      const equipmentsCollRef = collection(
        fleetDocRef,
        "equipments"
      ).withConverter(FirestoreFleetEquipmentsConverter);

      fDocUnsubscribe.current = onSnapshot(fleetDocRef, (f) => {
        const data = f.data();

        if (data) {
          isOwner.current = data.owner === user.uid;
          mutateFleet(data);
        } else {
          mutateFleet(null);
        }
      });

      sCollUnsubscribe.current = onSnapshot(shipsCollRef, (s) => {
        mutateShips(s.docs.map((d) => d.data()));
      });

      eCollUnsubscribe.current = onSnapshot(equipmentsCollRef, (e) => {
        mutateEquipments(e.docs.map((d) => d.data()));
      });
    }
  }, [
    firestore,
    fleetId,
    mutateEquipments,
    mutateFleet,
    mutateShips,
    signInCheckResult,
  ]);

  return <>{children}</>;
};
