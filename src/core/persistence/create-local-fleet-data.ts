import { nanoid } from "nanoid";
import { EquipmentsData } from "../../data/equipment";
import { ShipsData } from "../../data/ship";
import { EquipmentsState, RiggingState } from "../../store/organize/equipments";
import {
  FleetDateState,
  FleetDescriptionState,
  FleetIdState,
  FleetNameState,
  FleetTypeState,
} from "../../store/organize/info";
import { FleetState, ShipsState } from "../../store/organize/ships";
import { LocalFleetData_v1 } from "./types";

type FleetStates = {
  fleetId: FleetIdState;
  fleetDate: FleetDateState;
  fleetName: FleetNameState;
  fleetDescription: FleetDescriptionState;
  fleetType: FleetTypeState;
  fleet: FleetState;
  ships: ShipsState;
  rigging: RiggingState;
  equipments: EquipmentsState;
};
/** 諸々から保存用データを作成 */
export const createLocalFleetData = (
  fleetStates: FleetStates
): LocalFleetData_v1 => {
  const {
    fleetId,
    fleetDate,
    fleetName,
    fleetDescription,
    fleetType,
    fleet,
    ships,
    rigging,
    equipments,
  } = fleetStates;

  return {
    version: 1,
    id: fleetId,
    title: fleetName,
    description: fleetDescription,
    type: fleetType,
    createdAt: fleetDate.createdAt,
    updatedAt: fleetDate.updatedAt,
    ships: fleet.map(({ fleetNo, turnNo, shipId }) => {
      const ship = ships.find((v) => v.shipId === shipId);
      const shipRigging = rigging.filter((v) => v.shipId === shipId);
      const shipEquipments = shipRigging?.map((v) => {
        const eq = equipments.find((e) => v.equipmentId === e.equipmentId);
        if (!eq) throw new Error("Error");
        return { slotNo: v.slotNo, no: eq.equipment.no };
      });

      if (!ship) throw new Error("Error");
      const shipNo = ship.ship.no;

      return { fleetNo, turnNo, no: shipNo, equipments: shipEquipments };
    }),
  };
};

export const createFleetStates = (
  localFleetData: LocalFleetData_v1
): FleetStates => {
  const fleetId = localFleetData.id;
  const fleetDate = {
    createdAt: localFleetData.createdAt,
    updatedAt: localFleetData.updatedAt,
  };
  const fleetName = localFleetData.title;
  const fleetDescription = localFleetData.description;
  const fleetType = localFleetData.type;

  const fleet: FleetState = [];
  const ships: ShipsState = [];
  const rigging: RiggingState = [];
  const equipments: EquipmentsState = [];

  localFleetData.ships.forEach((v) => {
    const shipId = nanoid(8);

    const shipData = ShipsData.find((s) => s.no === v.no);

    if (!shipData) throw new Error("Error: ");
    fleet.push({ fleetNo: v.fleetNo, turnNo: v.turnNo, shipId: shipId });
    ships.push({ shipId, ship: shipData });

    v.equipments.forEach((e) => {
      const equipmentId = nanoid(8);

      const eqData = EquipmentsData.find((eq) => eq.no === e.no);

      if (!eqData) throw new Error("Error: ");

      rigging.push({
        shipId: shipId,
        slotNo: e.slotNo,
        equipmentId: equipmentId,
      });
      equipments.push({ equipmentId, equipment: eqData });
    });
  });

  return {
    fleetId,
    fleetDate,
    fleetName,
    fleetDescription,
    fleetType,
    fleet,
    ships,
    rigging,
    equipments,
  };
};
