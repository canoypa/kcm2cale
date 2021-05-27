import { CurrentShipStatus, ShipStatus } from "./types";

export const createStatus = (status: ShipStatus): CurrentShipStatus => {
  return {
    level: 99,

    slotSize: status.slotSize,

    hp: status.hp.min,

    power: status.power.max,
    torpedo: status.torpedo.max,
    aa: status.aa.max,
    asw: status.asw.max,

    armor: status.armor.max,
    evasion: status.evasion.max,
    los: status.los.max,
    luck: status.luck.max,
    aircraft: status.aircraft,

    speed: status.speed,
    range: status.range,

    consumption: status.consumption,
  };
};

export * from "./types";
