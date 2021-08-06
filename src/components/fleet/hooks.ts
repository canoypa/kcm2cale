import useSWR from "swr";
import { Equipment } from "../../models/equipment";
import { Fleet } from "../../models/fleet";
import { Ship } from "../../models/ship";

export const useFleet = (fleetId: string) => {
  return useSWR<Fleet>(`fleet/${fleetId}/fleet`);
};

export const useShips = (fleetId: string) => {
  return useSWR<Ship[]>(`fleet/${fleetId}/ships`);
};

export const useEquipments = (fleetId: string) => {
  return useSWR<Equipment[]>(`fleet/${fleetId}/equipments`);
};
