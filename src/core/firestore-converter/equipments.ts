import { FireEquipment } from "../../models/fleet";
import { firebase } from "../firebase/app";

export const FirestoreFleetEquipmentsConverter = {
  toFirestore: () => ({}),
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): FireEquipment {
    // Todo: バリデーション
    const data = snapshot.data(options);

    return {
      id: data.id,
      shipId: data.shipId,
      slotNo: data.slotNo,
      no: data.no,
    };
  },
};
