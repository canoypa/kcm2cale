import { useCallback, useContext } from "react";
import { addEquipDoc, updateEquipDoc } from "~/api/equip";
import {
  EquipmentData,
  ShipEquipment,
} from "../../../../models/equipment/types";
import { FleetIdContext } from "../../fleetIdContext";

type UseSetEquipment = () => (
  place: ShipEquipment,
  equipment: EquipmentData
) => void;
export const useSetEquipment: UseSetEquipment = () => {
  const fleetId = useContext(FleetIdContext);

  const setEquipment = useCallback(
    (place: ShipEquipment, equipmentData: EquipmentData) => {
      const { shipId, slotNo, id: equipmentId } = place;

      if (equipmentId) {
        const data = { no: equipmentData.no };
        updateEquipDoc(fleetId, equipmentId, data);
      } else {
        const data = { shipId, slotNo, no: equipmentData.no };
        addEquipDoc(fleetId, data);
      }
    },
    [fleetId]
  );

  return setEquipment;
};
