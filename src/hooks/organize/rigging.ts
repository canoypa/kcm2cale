import { useContext } from "react";
import { FleetIdContext } from "../../components/fleet/fleetIdContext";
import { useEquips } from "../../components/fleet/hooks";
import { EmptyEquip, Equip } from "../../models/equip";
import { Ship } from "../../models/ship";

const DUMMY_SLOT_SIZE = 4;

type Rigging = {
  shipEquips: Equip[];
  isCanAddNewEquip: boolean;
  newEquipPlace: EmptyEquip;
};
export const useRigging = (fleetPlace: Ship): Rigging => {
  const shipSlotSize = DUMMY_SLOT_SIZE;
  if (!shipSlotSize) throw new Error("Error: ship status が取得できない");

  const fleetId = useContext(FleetIdContext);
  const { data: equips } = useEquips(fleetId);

  const shipEquips = equips
    ? equips
        .filter((v) => v.shipId === fleetPlace.id)
        .sort((a, b) => a.slotNo - b.slotNo)
    : [];

  const equippedLength = shipEquips.length;

  const isCanAddNewEquip = shipSlotSize > equippedLength;
  const newEqSlotNo = equippedLength;

  const newEquipPlace = {
    shipId: fleetPlace.id,
    slotNo: newEqSlotNo,
    id: null,
    no: null,
  };

  return {
    shipEquips: shipEquips,
    isCanAddNewEquip: isCanAddNewEquip,
    newEquipPlace: newEquipPlace,
  };
};
