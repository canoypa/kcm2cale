import { FirestoreDataConverter } from "firebase/firestore";
import { EquipDoc } from "~/models/firestore/equipment";
import { Equip } from "../../models/equip";

export const FirestoreFleetEquipConverter: FirestoreDataConverter<Equip> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    // バリデーション
    const equip = EquipDoc.transform((v) => ({
      ...v,
      id: snapshot.id,
    })).parse(data);

    return equip;
  },
};
