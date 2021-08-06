import useSWR from "swr";
import { Fleet } from "../../models/fleet";

export const useFleetList = () => {
  return useSWR<Fleet[]>(`fleetList`);
};
