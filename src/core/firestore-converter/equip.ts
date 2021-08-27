import { FirestoreDataConverter } from "firebase/firestore";
import { Equip } from "../../models/equip";
import { EquipmentDoc } from "../../models/firestore/equipment";

export const FirestoreFleetEquipConverter: FirestoreDataConverter<Equip> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    // バリデーション
    const equipment = EquipmentDoc.check(data);

    return {
      id: snapshot.id,
      shipId: data.shipId,
      slotNo: data.slotNo,
      no: data.no,
    };
  },
};
