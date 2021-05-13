import { selectorFamily, useRecoilValue } from "recoil";
import { RiggingState } from "../../../../store/organize/equipments";
import { FleetStateValue } from "../../../../store/organize/ships";

const DUMMY_SLOT_SIZE = 4;

const slotSizeSelector = selectorFamily({
  key: "ShipSlotSize",
  get: (fleetPlace: FleetStateValue) => ({ get }) => DUMMY_SLOT_SIZE,
  // get(ShipsState).get(fleetPlace)?.status.slotSize,
});

type Rigging = {
  shipEquipments: Array<{
    shipId: string;
    slotNo: number;
    equipmentId: string;
  }>;
  isCanAddNewEquipment: boolean;
  newEquipmentSlotNo: number;
};
export const useRigging = (fleetPlace: FleetStateValue): Rigging => {
  const shipSlotSize = useRecoilValue(slotSizeSelector(fleetPlace));
  if (!shipSlotSize) throw new Error("Error: ship status が取得できない");

  const shipEquipmentsState = useRecoilValue(RiggingState);
  const shipEquipments = shipEquipmentsState
    .filter((v) => v.shipId === fleetPlace.shipId)
    .sort((a, b) => a.slotNo - b.slotNo);

  const equippedLength = shipEquipments.length;

  const isCanAddNewEquipment = shipSlotSize > equippedLength;
  const newEquipmentSlotNo = equippedLength;

  return {
    shipEquipments,
    isCanAddNewEquipment,
    newEquipmentSlotNo,
  };
};
