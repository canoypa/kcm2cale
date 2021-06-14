import { FireFleet } from "../../models/fleet";
import { firebase } from "../firebase/app";

export const FirestoreFleetConverter = {
  toFirestore: () => ({}),
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): FireFleet {
    // Todo: バリデーション
    const data = snapshot.data(options);

    const version = data.version;

    const id = data.id;

    const title = data.title;
    const description = data.description;
    const type = data.type;

    const createdAt = data.createdAt.toDate();
    const updatedAt = data.updatedAt.toDate();

    return {
      version,

      id,

      title,
      description,
      type,

      createdAt,
      updatedAt,
    };
  },
};
