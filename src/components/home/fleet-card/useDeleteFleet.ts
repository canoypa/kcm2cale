import { deleteFleetDoc } from "~/api/fleet/delete";

export const useDeleteFleet = () => {
  return async (fleetId: string) => {
    await deleteFleetDoc(fleetId);
  };
};
