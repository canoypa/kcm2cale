import { FireEquipment } from "../../models/fleet";
import { firebase } from "../firebase/app";

export const FirestoreFleetEquipmentsConverter: firebase.firestore.FirestoreDataConverter<FireEquipment> = {
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
