import { useCallback, useContext } from "react";
import { deleteShipEquipDocs } from "~/api/equip/delete";
import { addShipDoc, updateShipDoc } from "~/api/ship";
import { FleetShip, ShipData } from "../../../../models/ship";
import { FleetIdContext } from "../../fleetIdContext";

type UseSetShip = () => (place: FleetShip, ship: ShipData) => void;
export const useSetShip: UseSetShip = () => {
  const fleetId = useContext(FleetIdContext);

  const setShip = useCallback(
    (place: FleetShip, shipData: ShipData) => {
      const { fleetNo, turnNo, id: shipId } = place;

      if (shipId) {
        const data = { no: shipData.no };
        updateShipDoc(fleetId, shipId, data);
      } else {
        const data = { fleetNo, turnNo, no: shipData.no };
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
