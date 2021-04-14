import { atom } from "recoil";

export const FleetType = {
  Normal: "Normal",
  Carrier: "Carrier",
  Surface: "Surface",
  Transport: "Transport",
  StrikingForce: "StrikingForce",
} as const;
export type FleetType = typeof FleetType[keyof typeof FleetType];

type ActiveFleetNoState = number;
export const ActiveFleetNoState = atom<ActiveFleetNoState>({
  key: "ActiveFleetNo",
  default: 0,
});

export type FleetIdState = string;
export const FleetIdState = atom<FleetIdState>({
  key: "FleetId",
  default: "",
});

export type FleetNameState = string;
export const FleetNameState = atom<FleetNameState>({
  key: "FleetName",
  default: "",
});

export type FleetDescriptionState = string;
export const FleetDescriptionState = atom<FleetNameState>({
  key: "FleetDescription",
  default: "",
});

export type FleetTypeState = FleetType;
export const FleetTypeState = atom<FleetTypeState>({
  key: "FleetType",
  default: FleetType.Normal,
});

export type FleetDateState = {
  createdAt: Date;
  updatedAt: Date;
};
export const FleetDateState = atom<FleetDateState>({
  key: "FleetDateState",
  default: {
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});

export type IsNewFleetState = boolean;
export const IsNewFleetState = atom<IsNewFleetState>({
  key: "IsNewFleetState",
  default: true,
});
