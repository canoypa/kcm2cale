import { useSetRecoilState } from "recoil";
import { EquipmentId, EquipmentsState, RiggingState, SlotNo } from ".";
import { generateEquipmentId } from "../../../core/util/generate-id";
import { EquipmentData } from "../../../models/equipment/types";
import { ShipId } from "../ships";

export const useSetEquipment = () => {
  const setRigging = useSetRecoilState(RiggingState);
  const setEquipment = useSetRecoilState(EquipmentsState);

  return (shipId: ShipId, slotNo: SlotNo, equipment: EquipmentData) => {
    const equipmentId = generateEquipmentId();
    const newRigging = { shipId, slotNo, equipmentId };
    const newEquipment = { equipmentId, equipment };

    setRigging((state) => [...state, newRigging]);
    setEquipment((state) => [...state, newEquipment]);
  };
};

export const useRemoveEquipment = () => {
  const setRigging = useSetRecoilState(RiggingState);
  const setEquipment = useSetRecoilState(EquipmentsState);

  return (equipmentId: EquipmentId) => {
    setRigging((state) => state.filter((v) => v.equipmentId !== equipmentId));
    setEquipment((state) => state.filter((v) => v.equipmentId !== equipmentId));
  };
};
