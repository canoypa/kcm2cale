export const FleetType = {
  Normal: "Normal",
  Carrier: "Carrier",
  Surface: "Surface",
  Transport: "Transport",
  StrikingForce: "StrikingForce",
} as const;
export type FleetType = typeof FleetType[keyof typeof FleetType];
