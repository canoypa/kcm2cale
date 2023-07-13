import { useCallback, useContext } from "react";
import { deleteShipEquipDocs } from "~/api/equip/delete";
import { addShipDoc, updateShipDoc } from "~/api/ship";
import { FleetShip } from "../../../../models/ship";
import { FleetIdContext } from "../../fleetIdContext";

type UseSetShip = () => (place: FleetShip, ship: string) => void;
export const useSetShip: UseSetShip = () => {
  const fleetId = useContext(FleetIdContext);

  const setShip = useCallback(
    (place: FleetShip, shipNoToSet: string) => {
      const { fleetNo, turnNo, id: shipId } = place;

      if (shipId) {
        const data = { no: shipNoToSet };
        updateShipDoc(fleetId, shipId, data);
      } else {
        const data = { fleetNo, turnNo, no: shipNoToSet };
        addShipDoc(fleetId, data);
      }

      if (shipId) {
        deleteShipEquipDocs(fleetId, shipId);
      }
    },
    [fleetId]
  );

  return setShip;
};
