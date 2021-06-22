import { useParams } from "react-router";
import { selectorFamily, useRecoilValue } from "recoil";
import { FireEquipment, FireShip } from "../../models/fleet";
import { useFireEquipments } from "./equipment";

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

  const { fleetId } = useParams<{ fleetId: string }>();
  const shipEquipmentsState = useFireEquipments(fleetId);
  const shipEquipments = shipEquipmentsState
    .filter((v) => v.shipId === fleetPlace.id)
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
