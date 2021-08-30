import { useCallback } from "react";
import useSWR from "swr";
import { FleetShip } from "~/models/ship";

export type SelectShipState =
  | { open: true; target: FleetShip }
  | { open: false; target: null };

const defaultState: SelectShipState = {
  open: false,
  target: null,
};

export const useSelectShip = () => {
  const { data, mutate } = useSWR<SelectShipState>("select-ship", {
    fallbackData: defaultState,
  });

  const select = useCallback(
    (target: FleetShip) => {
      mutate({ open: true, target });
    },
    [mutate]
  );

  const reset = useCallback(() => {
    mutate(defaultState);
  }, [mutate]);

  return {
    // fallbackData を設定済みのため安全
    data: data as SelectShipState,
    select,
    reset,
  };
};
