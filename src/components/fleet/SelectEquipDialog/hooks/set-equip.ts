import { useCallback, useContext } from "react";
import { addEquipDoc, updateEquipDoc } from "~/api/equip";
import { EquipData, ShipEquip } from "../../../../models/equip/types";
import { FleetIdContext } from "../../fleetIdContext";

type UseSetEquip = () => (place: ShipEquip, equip: EquipData) => void;
export const useSetEquip: UseSetEquip = () => {
  const fleetId = useContext(FleetIdContext);

  const setEquip = useCallback(
    (place: ShipEquip, equipData: EquipData) => {
      const { shipId, slotNo, id: equipId } = place;

      if (equipId) {
        const data = { no: equipData.no };
        updateEquipDoc(fleetId, equipId, data);
      } else {
        const data = { shipId, slotNo, no: equipData.no };
        addEquipDoc(fleetId, data);
      }
    },
    [fleetId]
  );

  return setEquip;
};
