import { Equipment } from "../../models/equipment";
import { firebase } from "../firebase/app";

export const FirestoreFleetEquipmentsConverter: firebase.firestore.FirestoreDataConverter<Equipment> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    // Todo: バリデーション
    const data = snapshot.data();

    return {
      id: data.id,
      shipId: data.shipId,
      slotNo: data.slotNo,
      no: data.no,
    };
  },
};
