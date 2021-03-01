import { nanoid } from "nanoid";
import { EquipmentsData } from "../../data/equipment";
import { ShipsData } from "../../data/ship";
import { EquipmentsState } from "../../store/organize/equipments";
import { ShipsState } from "../../store/organize/ships";
import { FleetStates } from "./create-fleet-states";
import { LocalFleetData_v1 } from "./types";

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
    ships,
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
    ships: [...ships.entries()].map(
      ([{ fleetNo, turnNo, shipId }, { no: shipNo }]) => ({
        fleetNo: fleetNo,
        turnNo: turnNo,
        no: shipNo,
        equipments: [...equipments.entries()]
          .filter(([{ shipId: rgShipId }]) => rgShipId === shipId)
          .map(([{ slotNo }, { no: eqNo }]) => ({ slotNo, no: eqNo })),
      })
    ),
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

  const ships: ShipsState = new Map();
  const equipments: EquipmentsState = new Map();

  localFleetData.ships.forEach((v) => {
    const shipId = nanoid(8);

    const fleetPlace = {
      fleetNo: v.fleetNo,
      turnNo: v.turnNo,
      shipId: shipId,
    };
    const shipData = ShipsData.find((s) => s.no === v.no);

    if (!shipData) throw new Error("Error: ");
    ships.set(fleetPlace, shipData);

    v.equipments.forEach((e) => {
      const equipmentId = nanoid(8);

      const rigging = {
        shipId: shipId,
        slotNo: e.slotNo,
        equipmentId: equipmentId,
      };
      const eqData = EquipmentsData.find((eq) => eq.no === e.no);

      if (!eqData) throw new Error("Error: ");
      equipments.set(rigging, eqData);
    });
  });

  return {
    fleetId,
    fleetDate,
    fleetName,
    fleetDescription,
    fleetType,
    ships,
    equipments,
  };
};
