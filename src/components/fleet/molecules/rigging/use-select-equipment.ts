import { useState } from "react";
import { EquipmentData } from "../../../../models/equipment/types";
import {
  EquipmentId,
  SlotNo,
  useRemoveEquipment,
  useSetEquipment,
} from "../../../../store/organize/equipments";
import { ShipId } from "../../../../store/organize/ships";

type CurrentEquipment = {
  shipId: ShipId;
  slotNo: SlotNo;
  equipmentId: EquipmentId | null;
};

export const useSelectEquipment = () => {
  type SelectingEquipment =
    | { isOpen: true; currentEquipment: CurrentEquipment }
    | { isOpen: false; currentEquipment: null };

  const initialSelectingState: SelectingEquipment = {
    isOpen: false,
    currentEquipment: null,
  };
  const [selecting, setSelecting] = useState<SelectingEquipment>(
    initialSelectingState
  );

  const setEquipment = useSetEquipment();
  const removeEquipment = useRemoveEquipment();

  const startSelecting = (currentEquipment: CurrentEquipment) => {
    setSelecting({ isOpen: true, currentEquipment });
  };

  const endSelecting = (equipmentData: EquipmentData) => {
    if (!selecting.isOpen) throw new Error("Error: start 未実行");

    const { shipId, slotNo, equipmentId } = selecting.currentEquipment;

    setEquipment(shipId, slotNo, equipmentData);
    if (equipmentId) removeEquipment(equipmentId);

    setSelecting(initialSelectingState);
  };

  const cancelSelecting = () => {
    setSelecting(initialSelectingState);
  };

  return [
    selecting.isOpen,
    {
      start: startSelecting,
      end: endSelecting,
      cancel: cancelSelecting,
    },
  ] as const;
};
