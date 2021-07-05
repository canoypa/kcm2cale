import { Equipment } from "../../models/equipment";
import { EquipmentDoc } from "../../models/firestore/equipment";
import { firebase } from "../firebase/app";

export const FirestoreFleetEquipmentsConverter: firebase.firestore.FirestoreDataConverter<Equipment> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    // バリデーション
    const equipment = EquipmentDoc.check(data);

    return {
      ...equipment,
    };
  },
};
