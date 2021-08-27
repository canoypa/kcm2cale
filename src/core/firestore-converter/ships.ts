import { FirestoreDataConverter } from "firebase/firestore";
import { ShipDoc } from "../../models/firestore/ship";
import { Ship } from "../../models/ship";

export const FirestoreFleetShipsConverter: FirestoreDataConverter<Ship> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    // バリデーション
    const ship = ShipDoc.check(data);

    return {
      id: snapshot.id,
      fleetNo: data.fleetNo,
      turnNo: data.turnNo,
      no: data.no,
    };
  },
};
