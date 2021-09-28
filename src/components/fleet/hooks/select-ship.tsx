import { useCallback } from "react";
import useSWR from "swr";
import { FleetShip } from "~/models/ship";
import { useSetShip } from "../SelectShipDialog/hooks/set-ship";

export type SelectShipState =
  | { open: true; target: FleetShip }
  | { open: false; target: null };

const defaultState: SelectShipState = {
  open: false,
  target: null,
};

const useSelectShipState = () => {
  return useSWR<SelectShipState>("select-ship", {
    fallbackData: defaultState,
  });
};

export const useStartSelectShip = () => {
  const { mutate } = useSelectShipState();

  const start = useCallback(
    (target: FleetShip) => {
      mutate({ open: true, target });
    },
    [mutate]
  );

  return start;
};

export const useSelectShip = () => {
  const setShip = useSetShip();

  const { data, mutate } = useSelectShipState();

  const onClose = useCallback(() => {
    mutate(defaultState);
  }, [mutate]);

  const onSelect = useCallback(
    (shipNoToSet: string) => {
      // Assertion
      if (data === undefined || data.target === null) {
        throw new Error("Error");
      }

      setShip(data.target, shipNoToSet);
      onClose();
    },
    [onClose, data, setShip]
  );

  return {
    // fallbackData を設定済みのため安全
    open: (data as SelectShipState).open,
    onSelect,
    onClose,
  };
};
