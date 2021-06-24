import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { useSetRecoilState } from "recoil";
import { FirestoreFleetShipsConverter } from "../../core/firestore-converter/ships";
import { generateShipId } from "../../core/util/generate-id";
import { FireShip } from "../../models/fleet";
import { ShipData } from "../../models/ship";
import {
  FleetNo,
  FleetState,
  ShipId,
  ShipsState,
  TurnNo,
} from "../../store/organize/ships";

export const useFireShips = (fleetId: string) => {
  const docRef = useFirestore()
    .collection(`fleets/${fleetId}/ships`)
    .withConverter(FirestoreFleetShipsConverter);

  const { data } = useFirestoreCollectionData<FireShip>(docRef);

  return data;
};

export const useFireFleetShips = (fleetId: string, fleetNo: number) => {
  const fleetShips = useFireShips(fleetId);

  const data = fleetShips.filter((v) => v.fleetNo === fleetNo);

  return data;
};

export const useSetShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (fleetNo: FleetNo, turnNo: TurnNo, ship: ShipData) => {
    const shipId = generateShipId();
    const newFleet = { fleetNo, turnNo, shipId };
    const newShip = { shipId, ship };

    setFleet((state) => [...state, newFleet]);
    setShip((state) => [...state, newShip]);
  };
};

export const useRemoveShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (shipId: ShipId) => {
    setFleet((state) => state.filter((v) => v.shipId !== shipId));
    setShip((state) => state.filter((v) => v.shipId !== shipId));
  };
};
