import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { getFirestore } from "../../../../core/firebase/sdk/firestore";
import { generateShipId } from "../../../../core/util/generate-id";
import { EmptyShip, Ship, ShipData } from "../../../../models/ship";
import { FleetIdContext } from "../../fleetIdContext";

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
  const firestore = getFirestore();
  const fleetId = useContext(FleetIdContext);

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
      const shipRef = doc(firestore, `fleets/${fleetId}/ships/${shipId}`);

      updateDoc(shipRef, {
        id: shipId,
        no: shipData.no,
      });
    } else {
      const geneShipId = generateShipId();
      const shipRef = doc(firestore, `fleets/${fleetId}/ships/${geneShipId}`);

      setDoc(shipRef, {
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
