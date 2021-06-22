import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { useSetRecoilState } from "recoil";
import { FirestoreFleetEquipmentsConverter } from "../../core/firestore-converter/equipments";
import { generateEquipmentId } from "../../core/util/generate-id";
import { EquipmentData } from "../../models/equipment/types";
import { FireEquipment } from "../../models/fleet";
import {
  EquipmentId,
  EquipmentsState,
  RiggingState,
  SlotNo,
} from "../../store/organize/equipments";
import { ShipId } from "../../store/organize/ships";

export const useFireEquipments = (fleetId: string) => {
  const docRef = useFirestore()
    .collection(`fleets/${fleetId}/equipments`)
    .withConverter(FirestoreFleetEquipmentsConverter);

  const { data } = useFirestoreCollectionData<FireEquipment>(docRef, {
    idField: "id",
  });

  return data;
};

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
