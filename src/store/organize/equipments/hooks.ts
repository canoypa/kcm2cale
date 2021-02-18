import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";
import { EquipmentData } from "../../../modules/equipment/types";
import { EquipmentsState, RiggingState } from "./state";

export const useSetEquipment = () => {
  const setRigging = useSetRecoilState(RiggingState);
  const setEquipment = useSetRecoilState(EquipmentsState);

  return (shipId: string, slotNo: number, newEquipment: EquipmentData) => {
    const equipmentId = nanoid(8);
    const newRigging = { shipId, slotNo, equipmentId };

    setRigging((state) => [...state, newRigging]);
    setEquipment((state) => new Map(state.set(newRigging, newEquipment)));
  };
};

export const useRemoveEquipment = () => {
  const setRigging = useSetRecoilState(RiggingState);
  const setEquipment = useSetRecoilState(EquipmentsState);

  return (equipmentId: string) => {
    setRigging((state) => state.filter((v) => v.equipmentId !== equipmentId));
    setEquipment(
      (state) =>
        new Map(
          [...state.entries()].filter(([v]) => v.equipmentId !== equipmentId)
        )
    );
  };
};
