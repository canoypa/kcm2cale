import { useState } from "react";
import { ShipData } from "../../../../models/ship";
import {
  FleetNo,
  ShipId,
  TurnNo,
  useRemoveShip,
  useSetShip,
} from "../../../../store/organize/ships";
import { useRemoveEquipments } from "../../templates/select-ship/hooks";

export type CurrentShip = {
  fleetNo: FleetNo;
  turnNo: TurnNo;
  shipId: ShipId | null;
};

type SelectState =
  | { isOpen: true; currentShip: CurrentShip }
  | { isOpen: false; currentShip: null };
type SelectShip = [
  boolean,
  {
    start: (currentShip: CurrentShip) => void;
    onSelect: (shipData: ShipData) => void;
    end: () => void;
  }
];
export const useSelectShip = (): SelectShip => {
  const setShip = useSetShip();
  const removeShip = useRemoveShip();
  const removeShipEquipments = useRemoveEquipments();

  const initialSelectState: SelectState = {
    isOpen: false,
    currentShip: null,
  };
  const [selectState, setSelectState] = useState<SelectState>(
    initialSelectState
  );

  const startSelecting = (currentShip: CurrentShip) => {
    setSelectState({ isOpen: true, currentShip });
  };

  const endSelecting = () => {
    setSelectState(initialSelectState);
  };

  const onSelect = (shipData: ShipData) => {
    if (!selectState.isOpen) throw new Error("Error: start 未実行");

    const { fleetNo, turnNo, shipId } = selectState.currentShip;

    setShip(fleetNo, turnNo, shipData);
    if (shipId) {
      removeShip(shipId);
      removeShipEquipments(shipId);
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
