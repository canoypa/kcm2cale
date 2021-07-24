import { useState } from "react";
import { useParams } from "react-router";
import { generateShipId } from "../../../../core/util/generate-id";
import { EmptyShip, Ship, ShipData } from "../../../../models/ship";
import { useFirestore } from "../../../../store/firebase/sdk";

type SelectState =
  | { isOpen: true; currentShip: Ship | EmptyShip }
  | { isOpen: false; currentShip: null };
type SelectShip = [
  boolean,
  {
    start: (currentShip: Ship | EmptyShip) => void;
    onSelect: (shipData: ShipData) => void;
    end: () => void;
  }
];
export const useSelectShip = (): SelectShip => {
  // Todo: useParams 使用箇所
  const { fleetId } = useParams<{ fleetId: string }>();
  const firestore = useFirestore();

  const initialSelectState: SelectState = {
    isOpen: false,
    currentShip: null,
  };
  const [selectState, setSelectState] =
    useState<SelectState>(initialSelectState);

  const startSelecting = (currentShip: Ship | EmptyShip) => {
    setSelectState({ isOpen: true, currentShip });
  };

  const endSelecting = () => {
    setSelectState(initialSelectState);
  };

  const onSelect = (shipData: ShipData) => {
    if (!selectState.isOpen) throw new Error("Error: start 未実行");

    const { fleetNo, turnNo, id: shipId } = selectState.currentShip;

    if (shipId) {
      const shipRef = firestore.doc(`fleets/${fleetId}/ships/${shipId}`);

      shipRef.update({
        id: shipId,
        no: shipData.no,
      });
    } else {
      const geneShipId = generateShipId();
      const shipRef = firestore.doc(`fleets/${fleetId}/ships/${geneShipId}`);

      shipRef.set({
        id: geneShipId,
        fleetNo,
        turnNo,
        no: shipData.no,
      });
    }

    if (shipId) {
      // Todo: 装備削除
    }

    endSelecting();
  };

  return [
    selectState.isOpen,
    {
      start: startSelecting,
      onSelect: onSelect,
      end: endSelecting,
    },
  ];
};
