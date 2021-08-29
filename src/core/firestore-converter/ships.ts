import { FirestoreDataConverter } from "firebase/firestore";
import { ShipDoc } from "../../models/firestore/ship";
import { Ship } from "../../models/ship";

export const FirestoreFleetShipsConverter: FirestoreDataConverter<Ship> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    // バリデーション
    const ship = ShipDoc.transform((v) => ({
      ...v,
      id: snapshot.id,
    })).parse(data);

    return ship;
  },
};
