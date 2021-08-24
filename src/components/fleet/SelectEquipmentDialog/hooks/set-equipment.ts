import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useCallback, useContext } from "react";
import { getFirestore } from "../../../../core/firebase/sdk/firestore";
import { generateEquipmentId } from "../../../../core/util/generate-id";
import {
  EquipmentData,
  ShipEquipment,
} from "../../../../models/equipment/types";
import { FleetIdContext } from "../../fleetIdContext";

type UseSetEquipment = () => (
  place: ShipEquipment,
  equipment: EquipmentData
) => void;
export const useSetEquipment: UseSetEquipment = () => {
  const firestore = getFirestore();

  const fleetId = useContext(FleetIdContext);

  const setEquipment = useCallback(
    (place: ShipEquipment, equipmentData: EquipmentData) => {
      const { shipId, slotNo, id: equipmentId } = place;

      if (equipmentId) {
        const eqData = { no: equipmentData.no };

        const eqRef = doc(
          firestore,
          `fleets/${fleetId}/equipments/${equipmentId}`
        );
        updateDoc(eqRef, eqData);
      } else {
        const geneEqId = generateEquipmentId();
        const eqData = { id: geneEqId, shipId, slotNo, no: equipmentData.no };

        const eqRef = doc(
          firestore,
          `fleets/${fleetId}/equipments/${geneEqId}`
        );
        setDoc(eqRef, eqData);
      }
    },
    [firestore, fleetId]
  );

  return setEquipment;
};
