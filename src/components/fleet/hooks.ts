import useSWR from "swr";
import { Equip } from "../../models/equip";
import { Fleet } from "../../models/fleet";
import { Ship } from "../../models/ship";

export const useFleet = (fleetId: string) => {
  // 存在しない編成の場合 null
  // error boundary とか使え
  return useSWR<Fleet | null>(`fleet/${fleetId}/fleet`);
};

export const useShips = (fleetId: string) => {
  return useSWR<Ship[]>(`fleet/${fleetId}/ships`);
};

export const useEquips = (fleetId: string) => {
  return useSWR<Equip[]>(`fleet/${fleetId}/equips`);
};
