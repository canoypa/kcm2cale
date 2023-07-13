import { useCallback, useContext } from "react";
import { addEquipDoc, updateEquipDoc } from "~/api/equip";
import { ShipEquip } from "../../../../models/equip/types";
import { FleetIdContext } from "../../fleetIdContext";

type UseSetEquip = () => (place: ShipEquip, equipNoToSet: number) => void;
export const useSetEquip: UseSetEquip = () => {
  const fleetId = useContext(FleetIdContext);

  const setEquip = useCallback(
    (place: ShipEquip, equipNoToSet: number) => {
      const { shipId, slotNo, id: equipId } = place;

      if (equipId) {
        const data = { no: equipNoToSet };
        updateEquipDoc(fleetId, equipId, data);
      } else {
        const data = { shipId, slotNo, no: equipNoToSet };
        addEquipDoc(fleetId, data);
      }
    },
    [fleetId]
  );

  return setEquip;
};
