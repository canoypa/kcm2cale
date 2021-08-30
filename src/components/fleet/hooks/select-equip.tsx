import { useCallback } from "react";
import useSWR from "swr";
import { ShipEquip } from "~/models/equip";

export type SelectEquipState =
  | { open: true; target: ShipEquip }
  | { open: false; target: null };

const defaultState: SelectEquipState = {
  open: false,
  target: null,
};

export const useSelectEquip = () => {
  const { data, mutate } = useSWR<SelectEquipState>("select-equip", {
    fallbackData: defaultState,
  });

  const select = useCallback(
    (target: ShipEquip) => {
      mutate({ open: true, target });
    },
    [mutate]
  );

  const reset = useCallback(() => {
    mutate(defaultState);
  }, [mutate]);

  return {
    // fallbackData を設定済みのため安全
    data: data as SelectEquipState,
    select,
    reset,
  };
};
