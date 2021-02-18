import { useState } from "react";

type CurrentShip = {
  fleetNo: number;
  turnNo: number;
  shipId: string | null;
};

type SelectState =
  | { isOpen: true; currentShip: CurrentShip }
  | { isOpen: false; currentShip: null };
type SelectShip = [
  SelectState,
  {
    start: (currentShip: CurrentShip) => void;
    end: () => void;
  }
];
export const useSelectShip = (): SelectShip => {
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

  return [
    selectState,
    {
      start: startSelecting,
      end: endSelecting,
    },
  ];
};
