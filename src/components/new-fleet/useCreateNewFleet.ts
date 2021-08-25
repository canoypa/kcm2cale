import { useCallback } from "react";
import { addFleetDoc, SettableFleet } from "~/api/fleet";
import { FleetType } from "../../models/fleet";

const createNewFleetData = (userId: string): SettableFleet => ({
  owner: userId,

  title: "",
  description: "",
  type: FleetType.Normal,
});

export const useCreateNewFleet = () => {
  return useCallback(async (userId: string) => {
    const newFleetData = createNewFleetData(userId);
    const fleetRef = await addFleetDoc(newFleetData);

    return fleetRef;
  }, []);
};
