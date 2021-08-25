import { FirestoreDataConverter } from "firebase/firestore";
import { Ship } from "../../models/ship";

export const FirestoreFleetShipsConverter: FirestoreDataConverter<Ship> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    // Todo: バリデーション
    const data = snapshot.data();

    return {
      id: snapshot.id,
      fleetNo: data.fleetNo,
      turnNo: data.turnNo,
      no: data.no,
    };
  },
};
