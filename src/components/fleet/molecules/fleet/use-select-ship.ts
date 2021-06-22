import { useState } from "react";
import { useRemoveShip, useSetShip } from "../../../../hooks/organize/ship";
import { EmptyFireShip, FireShip } from "../../../../models/fleet";
import { ShipData } from "../../../../models/ship";
import { useRemoveEquipments } from "../../templates/select-ship/hooks";

type SelectState =
  | { isOpen: true; currentShip: FireShip | EmptyFireShip }
  | { isOpen: false; currentShip: null };
type SelectShip = [
  boolean,
  {
    start: (currentShip: FireShip | EmptyFireShip) => void;
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

  const startSelecting = (currentShip: FireShip | EmptyFireShip) => {
    setSelectState({ isOpen: true, currentShip });
  };

  const endSelecting = () => {
    setSelectState(initialSelectState);
  };

  const onSelect = (shipData: ShipData) => {
    if (!selectState.isOpen) throw new Error("Error: start 未実行");

    const { fleetNo, turnNo, id: shipId } = selectState.currentShip;

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
