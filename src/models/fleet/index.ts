export const FleetType = {
  Normal: "Normal",
  Carrier: "Carrier",
  Surface: "Surface",
  Transport: "Transport",
  StrikingForce: "StrikingForce",
} as const;
export type FleetType = typeof FleetType[keyof typeof FleetType];

export type Fleet = {
  version: number;

  id: string;
  owner: string;

  title: string;
  description: string;
  type: FleetType;

  createdAt: Date;
  updatedAt: Date;
};
