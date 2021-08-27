import { FirestoreDataConverter } from "firebase/firestore";
import { Equip } from "../../models/equip";

export const FirestoreFleetEquipConverter: FirestoreDataConverter<Equip> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    // Todo: バリデーション
    const data = snapshot.data();

    return {
      id: snapshot.id,
      shipId: data.shipId,
      slotNo: data.slotNo,
      no: data.no,
    };
  },
};
