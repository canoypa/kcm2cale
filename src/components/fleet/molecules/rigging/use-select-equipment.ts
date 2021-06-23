import { useState } from "react";
import { useParams } from "react-router";
import { useFirestore } from "reactfire";
import { generateEquipmentId } from "../../../../core/util/generate-id";
import { EquipmentData } from "../../../../models/equipment/types";
import { ShipEquipment } from "../../../../store/organize/equipments";

export const useSelectEquipment = () => {
  type SelectingEquipment =
    | { isOpen: true; currentEquipment: ShipEquipment }
    | { isOpen: false; currentEquipment: null };

  const initialSelectingState: SelectingEquipment = {
    isOpen: false,
    currentEquipment: null,
  };
  const [selecting, setSelecting] = useState<SelectingEquipment>(
    initialSelectingState
  );

  // Todo: useParams 使用箇所
  const { fleetId } = useParams<{ fleetId: string }>();
  const firestore = useFirestore();

  const startSelecting = (currentEquipment: ShipEquipment) => {
    setSelecting({ isOpen: true, currentEquipment });
  };

  const endSelecting = (equipmentData: EquipmentData) => {
    if (!selecting.isOpen) throw new Error("Error: start 未実行");

    const { shipId, slotNo, equipmentId } = selecting.currentEquipment;

    if (equipmentId) {
      const eqRef = firestore.doc(
        `fleets/${fleetId}/equipments/${equipmentId}`
      );

      eqRef.update({
        id: shipId,
        no: equipmentData.no,
      });
    } else {
      const geneEqId = generateEquipmentId();
      const eqRef = firestore.doc(`fleets/${fleetId}/equipments/${geneEqId}`);

      eqRef.set({
        id: geneEqId,
        shipId,
        slotNo,
        no: equipmentData.no,
      });
    }

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
