import { Box, CircularProgress } from "@material-ui/core";
import React, { FC, ReactNode, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { FirestoreFleetConverter } from "../../../core/firestore-converter";
import { FirestoreFleetEquipmentsConverter } from "../../../core/firestore-converter/equipments";
import { FirestoreFleetShipsConverter } from "../../../core/firestore-converter/ships";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { useFirestore } from "../../../store/firebase/sdk";
import { useEquipments, useFleet, useShips } from "../hooks";

type Props = {
  /** 更新抑制のためメモ化されたコンポーネントであるべき */
  children: ReactNode;
};
export const FleetDataProvider: FC<Props> = ({ children }) => {
  const { fleetId } = useParams<{ fleetId: string }>();

  const firestore = useFirestore();
  const { isValidating: isSignInValidating, data: signInCheckResult } =
    useSigninCheck();

  // useEffect からの更新検知のため useState を使用
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
  }, [fleet, ships, equipments]);

  useEffect(() => {
    if (isSignInValidating || !signInCheckResult.signedIn) {
      return;
    }

    const user = signInCheckResult.user;

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
        mutateFleet(data);
      }
    });

    sCollUnsubscribe.current = shipsCollRef.onSnapshot((s) => {
      mutateShips(s.docs.map((d) => d.data()));
    });

    eCollUnsubscribe.current = equipmentsCollRef.onSnapshot((e) => {
      mutateEquipments(e.docs.map((d) => d.data()));
    });
  }, [
    firestore,
    fleetId,
    mutateEquipments,
    mutateFleet,
    mutateShips,
    signInCheckResult,
    isSignInValidating,
  ]);

  if (isSignInValidating || !signInCheckResult.signedIn) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  return <>{children}</>;
};
