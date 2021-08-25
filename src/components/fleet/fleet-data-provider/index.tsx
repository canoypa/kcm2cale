import { DocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import React, {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { listenEquipDocs } from "~/api/equip";
import { listenFleetDoc } from "~/api/fleet";
import { listenShipDocs } from "~/api/ship";
import { Equipment } from "~/models/equipment";
import { Fleet } from "~/models/fleet";
import { Ship } from "~/models/ship";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { FleetIdContext } from "../fleetIdContext";
import { useEquipments, useFleet, useShips } from "../hooks";

type Props = {
  /** 更新抑制のためメモ化されたコンポーネントであるべき */
  children: ReactNode;
};
export const FleetDataProvider: FC<Props> = ({ children }) => {
  const fleetId = useContext(FleetIdContext);

  const { data: signInCheckResult } = useSigninCheck();

  const { data: fleet, mutate: mutateFleet } = useFleet(fleetId);
  const { data: ships, mutate: mutateShips } = useShips(fleetId);
  const { data: equipments, mutate: mutateEquipments } = useEquipments(fleetId);

  // 作成者の場合のみ変更を受け取るようにするあれこれ
  // next.js 移行できれいにしてくれ...
  const fleetDocUnsubscribe = useRef<(() => void) | undefined>(undefined);
  const shipDocsUnsubscribe = useRef<(() => void) | undefined>(undefined);
  const equipDocsUnsubscribe = useRef<(() => void) | undefined>(undefined);

  // 現在のリストへの更新検知を避けた参照
  // shipDocsChangeCallback/equipDocsChangeCallback 内で使用
  const shipsRef = useRef<Ship[]>([]);
  useEffect(() => {
    ships && (shipsRef.current = ships);
  }, [ships]);
  const equipsRef = useRef<Equipment[]>([]);
  useEffect(() => {
    equipments && (equipsRef.current = equipments);
  }, [equipments]);

  const fleetDocChangeCallback = useCallback(
    (snap: DocumentSnapshot<Fleet>) => {
      const data = snap.data();
      mutateFleet(data ?? null);
    },
    [mutateFleet]
  );

  const shipDocsChangeCallback = useCallback(
    (snap: QuerySnapshot<Ship>) => {
      let result = shipsRef.current;

      snap.docChanges().forEach((change) => {
        const data = change.doc.data();

        if (change.type === "added") result = [...result, data];

        if (change.type === "modified")
          result = result.map((v) => (v.id === data.id ? data : v));

        if (change.type === "removed")
          result = result.filter((v) => !(v.id === data.id));
      });

      mutateShips(result);
    },
    [mutateShips]
  );

  const equipDocsChangeCallback = useCallback(
    (snap: QuerySnapshot<Equipment>) => {
      let result = equipsRef.current;

      snap.docChanges().forEach((change) => {
        const data = change.doc.data();

        if (change.type === "added") result = [...result, data];

        if (change.type === "modified")
          result = result.map((v) => (v.id === data.id ? data : v));

        if (change.type === "removed")
          result = result.filter((v) => !(v.id === data.id));
      });

      mutateEquipments(result);
    },
    [mutateEquipments]
  );

  useEffect(() => {
    // initial load and subscribe changes
    fleetDocUnsubscribe.current = listenFleetDoc(
      fleetId,
      fleetDocChangeCallback
    );
    shipDocsUnsubscribe.current = listenShipDocs(
      fleetId,
      shipDocsChangeCallback
    );
    equipDocsUnsubscribe.current = listenEquipDocs(
      fleetId,
      equipDocsChangeCallback
    );

    return () => {
      // Unsubscribe
      fleetDocUnsubscribe.current?.();
      shipDocsUnsubscribe.current?.();
      equipDocsUnsubscribe.current?.();
    };
  }, [
    fleetId,
    fleetDocChangeCallback,
    shipDocsChangeCallback,
    equipDocsChangeCallback,
  ]);

  useEffect(() => {
    // データが揃った後、作成者でなければリスナを解除
    if (signInCheckResult.signedIn && fleet && ships && equipments) {
      if (fleet.owner !== signInCheckResult.user.uid) {
        fleetDocUnsubscribe.current?.();
        shipDocsUnsubscribe.current?.();
        equipDocsUnsubscribe.current?.();
      }
    }
  }, [equipments, fleet, ships, signInCheckResult]);

  return <>{children}</>;
};
