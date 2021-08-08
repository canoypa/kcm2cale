import { Ship } from "../../models/ship";
import { firebase } from "../firebase/app";

export const FirestoreFleetShipsConverter: firebase.firestore.FirestoreDataConverter<Ship> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    // Todo: バリデーション
    const data = snapshot.data();

    return {
      id: data.id,
      fleetNo: data.fleetNo,
      turnNo: data.turnNo,
      no: data.no,
    };
  },
};
