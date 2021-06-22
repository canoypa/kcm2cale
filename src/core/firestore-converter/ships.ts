import { FireShip } from "../../models/fleet";
import { firebase } from "../firebase/app";

export const FirestoreFleetShipsConverter = {
  toFirestore: () => ({}),
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): FireShip {
    // Todo: バリデーション
    const data = snapshot.data(options);

    return {
      id: data.id,
      fleetNo: data.fleetNo,
      turnNo: data.turnNo,
      no: data.no,
    };
  },
};
