import { FireFleet } from "../../models/fleet";
import { firebase } from "../firebase/app";

export const FirestoreFleetConverter: firebase.firestore.FirestoreDataConverter<FireFleet> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    // Todo: バリデーション
    const data = snapshot.data({ serverTimestamps: "previous" });

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
      owner: data.owner,

      title,
      description,
      type,

      createdAt,
      updatedAt,
    };
  },
};
