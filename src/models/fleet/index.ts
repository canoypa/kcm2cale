export const FleetType = {
  Normal: "normal",
  Carrier: "carrier",
  Surface: "surface",
  Transport: "transport",
  Striking: "striking",
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
