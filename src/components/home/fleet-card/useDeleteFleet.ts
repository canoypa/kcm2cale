import { useFirestore } from "reactfire";

export const useDeleteFleet = () => {
  const firestore = useFirestore();

  return async (fleetId: string) => {
    // 各参照を取得
    const fleeDocRef = firestore.doc(`fleets/${fleetId}`);
    const shipsColRed = fleeDocRef.collection("ships");
    const equipmentsColRed = fleeDocRef.collection("equipments");

    // 艦,装備ドキュメントリストの取得
    const { docs: shipDocs } = await shipsColRed.get();
    const { docs: equipmentDocs } = await equipmentsColRed.get();

    // バッチ処理開始
    const batch = firestore.batch();

    // 各ドキュメント削除
    shipDocs.forEach((doc) => batch.delete(doc.ref));
    equipmentDocs.forEach((doc) => batch.delete(doc.ref));
    batch.delete(fleeDocRef);

    // コミット
    batch.commit();
  };
};
