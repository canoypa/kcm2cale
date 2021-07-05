import { ShipDoc } from "../../models/firestore/ship";
import { Ship } from "../../models/ship";
import { firebase } from "../firebase/app";

export const FirestoreFleetShipsConverter: firebase.firestore.FirestoreDataConverter<Ship> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data();

    // バリデーション
    const ship = ShipDoc.check(data);

    return {
      ...ship,
    };
  },
};
