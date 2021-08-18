import { useContext } from "react";
import { FleetIdContext } from "../../components/fleet/fleetIdContext";
import { useEquipments } from "../../components/fleet/hooks";
import { EmptyEquipment, Equipment } from "../../models/equipment";
import { Ship } from "../../models/ship";

const DUMMY_SLOT_SIZE = 4;

type Rigging = {
  shipEquipments: Equipment[];
  isCanAddNewEquipment: boolean;
  newEquipmentPlace: EmptyEquipment;
};
export const useRigging = (fleetPlace: Ship): Rigging => {
  const shipSlotSize = DUMMY_SLOT_SIZE;
  if (!shipSlotSize) throw new Error("Error: ship status が取得できない");

  const fleetId = useContext(FleetIdContext);
  const { data: equipments } = useEquipments(fleetId);

  const shipEquipments = equipments
    ? equipments
        .filter((v) => v.shipId === fleetPlace.id)
        .sort((a, b) => a.slotNo - b.slotNo)
    : [];

  const equippedLength = shipEquipments.length;

  const isCanAddNewEquipment = shipSlotSize > equippedLength;
  const newEqSlotNo = equippedLength;

  const newEquipmentPlace = {
    shipId: fleetPlace.id,
    slotNo: newEqSlotNo,
    id: null,
    no: null,
  };

  return {
    shipEquipments,
    isCanAddNewEquipment,
    newEquipmentPlace,
  };
};
