import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getFirestore } from "../../../core/firebase/sdk/firestore";

export const useDeleteFleet = () => {
  const firestore = getFirestore();

  return async (fleetId: string) => {
    // 各参照を取得
    const fleeDocRef = doc(firestore, `fleets/${fleetId}`);
    const shipsColRed = collection(fleeDocRef, "ships");
    const equipmentsColRed = collection(fleeDocRef, "equipments");

    // 艦,装備ドキュメントリストの取得
    const { docs: shipDocs } = await getDocs(shipsColRed);
    const { docs: equipmentDocs } = await getDocs(equipmentsColRed);

    // バッチ処理開始
    const batch = writeBatch(firestore);

    // 各ドキュメント削除
    shipDocs.forEach((doc) => batch.delete(doc.ref));
    equipmentDocs.forEach((doc) => batch.delete(doc.ref));
    batch.delete(fleeDocRef);

    // コミット
    batch.commit();
  };
};
