import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useCallback, useContext } from "react";
import { getFirestore } from "../../../../core/firebase/sdk/firestore";
import { generateShipId } from "../../../../core/util/generate-id";
import { FleetShip, ShipData } from "../../../../models/ship";
import { FleetIdContext } from "../../fleetIdContext";

type UseSetShip = () => (place: FleetShip, ship: ShipData) => void;
export const useSetShip: UseSetShip = () => {
  const firestore = getFirestore();

  const fleetId = useContext(FleetIdContext);

  const setShip = useCallback(
    (place: FleetShip, shipData: ShipData) => {
      const { fleetNo, turnNo, id: shipId } = place;

      if (shipId) {
        const docData = { no: shipData.no };

        const shipRef = doc(firestore, `fleets/${fleetId}/ships/${shipId}`);
        updateDoc(shipRef, docData);
      } else {
        const geneShipId = generateShipId();
        const docData = { id: geneShipId, fleetNo, turnNo, no: shipData.no };

        const shipRef = doc(firestore, `fleets/${fleetId}/ships/${geneShipId}`);
        setDoc(shipRef, docData);
      }

      if (shipId) {
        // Todo: 装備削除
      }
    },
    [firestore, fleetId]
  );

  return setShip;
};
