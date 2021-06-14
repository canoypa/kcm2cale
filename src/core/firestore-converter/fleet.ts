import { firebase } from "../firebase/app";
import { LocalFleetDataV1 } from "../persistence/types";

export const FirestoreFleetConverter = {
  toFirestore: () => ({}),
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): LocalFleetDataV1 {
    const data = snapshot.data(options)!;

    const createdAt = data.createdAt.toDate();
    const updatedAt = data.updatedAt.toDate();

    return { ...data, createdAt, updatedAt };
  },
};
