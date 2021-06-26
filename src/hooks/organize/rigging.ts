import { useContext } from "react";
import { selectorFamily, useRecoilValue } from "recoil";
import { EquipmentsContext } from "../../components/fleet/contexts";
import { FireEquipment, FireShip } from "../../models/fleet";

const DUMMY_SLOT_SIZE = 4;

const slotSizeSelector = selectorFamily({
  key: "ShipSlotSize",
  get: (_fleetPlace: FireShip) => () => DUMMY_SLOT_SIZE,
  // get(ShipsState).get(fleetPlace)?.status.slotSize,
});

type Rigging = {
  shipEquipments: FireEquipment[];
  isCanAddNewEquipment: boolean;
  newEquipmentSlotNo: number;
};
export const useRigging = (fleetPlace: FireShip): Rigging => {
  const shipSlotSize = useRecoilValue(slotSizeSelector(fleetPlace));
  if (!shipSlotSize) throw new Error("Error: ship status が取得できない");

  const shipEquipmentsState = useContext(EquipmentsContext);

  const shipEquipments = shipEquipmentsState
    ? shipEquipmentsState
        .filter((v) => v.shipId === fleetPlace.id)
        .sort((a, b) => a.slotNo - b.slotNo)
    : [];

  const equippedLength = shipEquipments.length;

  const isCanAddNewEquipment = shipSlotSize > equippedLength;
  const newEquipmentSlotNo = equippedLength;

  return {
    shipEquipments,
    isCanAddNewEquipment,
    newEquipmentSlotNo,
  };
};
