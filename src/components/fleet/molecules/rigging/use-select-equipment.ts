import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { getFirestore } from "../../../../core/firebase/sdk/firestore";
import { generateEquipmentId } from "../../../../core/util/generate-id";
import {
  EquipmentData,
  ShipEquipment,
} from "../../../../models/equipment/types";
import { FleetIdContext } from "../../fleetIdContext";

export const useSelectEquipment = () => {
  type SelectingEquipment =
    | { isOpen: true; currentEquipment: ShipEquipment }
    | { isOpen: false; currentEquipment: null };

  const firestore = getFirestore();

  const initialSelectingState: SelectingEquipment = {
    isOpen: false,
    currentEquipment: null,
  };
  const [selecting, setSelecting] = useState<SelectingEquipment>(
    initialSelectingState
  );

  const fleetId = useContext(FleetIdContext);

  const startSelecting = (currentEquipment: ShipEquipment) => {
    setSelecting({ isOpen: true, currentEquipment });
  };

  const endSelecting = (equipmentData: EquipmentData) => {
    if (!selecting.isOpen) throw new Error("Error: start 未実行");

    const { shipId, slotNo, id: equipmentId } = selecting.currentEquipment;

    if (equipmentId) {
      const eqRef = doc(
        firestore,
        `fleets/${fleetId}/equipments/${equipmentId}`
      );

      updateDoc(eqRef, {
        id: shipId,
        no: equipmentData.no,
      });
    } else {
      const geneEqId = generateEquipmentId();
      const eqRef = doc(firestore, `fleets/${fleetId}/equipments/${geneEqId}`);

      setDoc(eqRef, {
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
