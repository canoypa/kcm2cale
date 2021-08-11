import { FirestoreDataConverter } from "firebase/firestore";
import { Equipment } from "../../models/equipment";

export const FirestoreFleetEquipmentsConverter: FirestoreDataConverter<Equipment> =
  {
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
