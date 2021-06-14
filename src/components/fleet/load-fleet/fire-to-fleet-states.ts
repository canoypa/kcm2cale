import { FleetStates } from "../../../core/persistence/create-fleet-states";
import { EquipmentsData } from "../../../data/equipment";
import { ShipsData } from "../../../data/ship";
import { FireEquipment, FireFleet, FireShip } from "../../../models/fleet";
import {
  EquipmentsState,
  RiggingState,
} from "../../../store/organize/equipments";
import { FleetState, ShipsState } from "../../../store/organize/ships";

export const decodeFireToFleetStates = (
  fleetData: FireFleet,
  shipList: FireShip[],
  equipmentList: FireEquipment[]
): FleetStates => {
  const fleet: FleetState = shipList.map(({ fleetNo, turnNo, id: shipId }) => ({
    fleetNo,
    turnNo,
    shipId,
  }));
  const ships: ShipsState = shipList.map(({ id: shipId, no }) => {
    const ship = ShipsData.find((v) => v.no === no);
    if (!ship) throw new Error("Error: found ship");
    return { shipId, ship };
  });

  const rigging: RiggingState = equipmentList.map(
    ({ shipId, slotNo, id: equipmentId }) => ({ shipId, slotNo, equipmentId })
  );
  const equipments: EquipmentsState = equipmentList.map(
    ({ id: equipmentId, no }) => {
      const equipment = EquipmentsData.find((v) => v.no === no);
      if (!equipment) throw new Error("Error: found equipment");
      return { equipmentId, equipment };
    }
  );

  return {
    fleetId: fleetData.id,
    fleetName: fleetData.title,
    fleetDescription: fleetData.description,
    fleetType: fleetData.type,
    fleet,
    ships,
    rigging,
    equipments,
  };
};
